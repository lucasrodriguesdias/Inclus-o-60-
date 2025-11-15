import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

export default function AccessibilityControls() {
  const { globalScale, setGlobalScale } = useApp();

  const changeScale = (delta) => {
    const v = Math.max(
      0.9,
      Math.min(1.6, parseFloat((globalScale + delta).toFixed(2)))
    );
    setGlobalScale(v);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.ctrlBtn, { marginRight: 12 }]}
        onPress={() => changeScale(-0.1)}
        accessibilityLabel="Diminuir tamanho da fonte e ícones">
        <Text style={styles.btnText}>A-</Text>
      </Pressable>
      <Pressable
        style={styles.ctrlBtn}
        onPress={() => changeScale(+0.1)}
        accessibilityLabel="Aumentar tamanho da fonte e ícones">
        <Text style={styles.btnText}>A+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 20,
  },
  ctrlBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFB95F',
    alignItems: 'center',
  },
  btnText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
});
