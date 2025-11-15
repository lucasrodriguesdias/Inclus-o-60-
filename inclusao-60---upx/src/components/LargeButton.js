import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';

export default function LargeButton({ label, onPress, accessibilityLabel }) {
  const { globalScale, highContrast } = useApp();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      style={[styles.btn, highContrast && { backgroundColor: '#000' }]}>
      <Text
        style={[
          styles.text,
          { fontSize: 18 * globalScale },
          highContrast && { color: '#fff' },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#286a4e',
    marginVertical: 8,
    alignItems: 'center',
    elevation: 4,
  },
  text: { color: '#fff', fontWeight: '700' },
});