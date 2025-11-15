import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { useApp } from '../context/AppContext';

const GridItem = ({ label, imageSource, onPress }) => {
  const { globalScale, highContrast } = useApp();
  
  const contrastStyle = highContrast ? styles.highContrastText : {};
  const contrastContainer = highContrast ? styles.highContrastContainer : {};

  return (
    <TouchableOpacity
      style={[styles.itemContainer, contrastContainer]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label} 
    >
      <Image
        source={imageSource}
        style={[styles.image, { transform: [{ scale: globalScale * 0.9 }] }]}
        resizeMode="contain"
      />
      <Text style={[styles.label, { fontSize: 18 * globalScale }, contrastStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 6, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, 
    shadowRadius: 6, 
    width: '47%', 
    marginBottom: 15, 
  },
  image: {
    width: 60,  
    height: 60, 
    marginBottom: 8,
    tintColor: '#286a4e',
  },
  label: {
    fontWeight: '700',
    textAlign: 'center', 
    color: '#333',
  },
  highContrastContainer: {
      backgroundColor: '#333', 
      borderColor: '#FFF',
      borderWidth: 2,
      elevation: 0,
      shadowOpacity: 0,
  },
  highContrastText: {
      color: '#FFF', 
  },
});

export default GridItem;