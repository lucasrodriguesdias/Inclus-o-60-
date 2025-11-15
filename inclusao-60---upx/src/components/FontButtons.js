import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

export default function FontButtons() {
  const { globalScale, setGlobalScale, highContrast } = useApp();

  const update = (v) => {
    const newValue = Math.max(0.8, Math.min(1.6, globalScale + v));
    setGlobalScale(newValue);
  };

  return (
    <View style={[styles.container]}>
      <Pressable
        onPress={() => update(-0.1)}
        style={[styles.btn, highContrast && styles.btnHC]}>
        <Text style={[styles.text, highContrast && styles.textHC]}>A-</Text>
      </Pressable>

      <Pressable
        onPress={() => update(+0.1)}
        style={[styles.btn, highContrast && styles.btnHC]}>
        <Text style={[styles.text, highContrast && styles.textHC]}>A+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
    marginTop: 4,
  },
  btn: {
    backgroundColor: '#FFB94F',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHC: {
    backgroundColor: '#000',
    borderColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  textHC: {
    color: '#fff',
  },
});
