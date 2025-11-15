import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

export default function SettingsScreen() {
  const { globalScale, setGlobalScale, highContrast, setHighContrast } = useApp();

  const changeScale = (delta) => {
    const v = Math.max(
      0.8,
      Math.min(1.6, parseFloat((globalScale + delta).toFixed(2)))
    );
    setGlobalScale(v);
  };

  return (
    <View
      style={[
        styles.container,
        highContrast && { backgroundColor: '#000' },
      ]}
    >
      <Text
        style={[
          styles.title,
          { fontSize: 22 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        Acessibilidade
      </Text>

      {/* TAMANHO DA FONTE */}
      <View style={styles.row}>
        <Text
          style={[
            styles.label,
            { fontSize: 18 * globalScale },
            highContrast && { color: '#fff' },
          ]}
        >
          Tamanho da fonte
        </Text>

        <View style={styles.row}>
          <Pressable style={styles.btn} onPress={() => changeScale(-0.1)}>
            <Text style={[styles.btnText, { fontSize: 16 * globalScale }]}>
              A-
            </Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={() => changeScale(+0.1)}>
            <Text style={[styles.btnText, { fontSize: 16 * globalScale }]}>
              A+
            </Text>
          </Pressable>
        </View>
      </View>

      {/* ALTO CONTRASTE */}
      <View style={styles.row}>
        <Text
          style={[
            styles.label,
            { fontSize: 18 * globalScale },
            highContrast && { color: '#fff' },
          ]}
        >
          Alto contraste
        </Text>

        <Pressable
          style={[
            styles.toggle,
            highContrast && { backgroundColor: '#333' },
          ]}
          onPress={() => setHighContrast(!highContrast)}
        >
          <Text
            style={[
              styles.toggleText,
              { fontSize: 16 * globalScale },
              highContrast && { color: '#fff' },
            ]}
          >
            {highContrast ? 'Ativo' : 'Desligado'}
          </Text>
        </Pressable>
      </View>

      <Text
        style={[
          styles.notice,
          { fontSize: 15 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        As configurações são salvas neste dispositivo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontWeight: '800', marginBottom: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: { fontWeight: '700' },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 8,
    borderRadius: 12,
    backgroundColor: '#4A5568',
  },
  btnText: { color: '#fff', fontWeight: '800' },
  toggle: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  toggleText: { fontWeight: '800' },
  notice: {
    marginTop: 20,
  },
});
