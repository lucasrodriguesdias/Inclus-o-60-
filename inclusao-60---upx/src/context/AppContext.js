import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [globalScale, setGlobalScaleState] = useState(1.1);
  const [highContrast, setHighContrastState] = useState(false);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const gs = await AsyncStorage.getItem('globalScale');
        const hc = await AsyncStorage.getItem('highContrast');
        const pr = await AsyncStorage.getItem('progress');
        if (gs) setGlobalScaleState(parseFloat(gs));
        if (hc) setHighContrastState(hc === '1');
        if (pr) setProgress(JSON.parse(pr));
      } catch {}
    })();
  }, []);

  const setGlobalScale = async (v) => {
    setGlobalScaleState(v);
    try {
      await AsyncStorage.setItem('globalScale', String(v));
    } catch {}
  };
  const setHighContrast = async (v) => {
    setHighContrastState(v);
    try {
      await AsyncStorage.setItem('highContrast', v ? '1' : '0');
    } catch {}
  };
  const toggleProgress = async (id) => {
    const next = { ...progress, [id]: !progress[id] };
    setProgress(next);
    try {
      await AsyncStorage.setItem('progress', JSON.stringify(next));
    } catch {}
  };

  return (
    <AppContext.Provider
      value={{
        globalScale,
        setGlobalScale,
        highContrast,
        setHighContrast,
        progress,
        toggleProgress,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}