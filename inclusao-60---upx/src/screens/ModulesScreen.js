import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { lessons } from '../data/lessons';
import { useApp } from '../context/AppContext';


export default function ModulesScreen() {
  const navigation = useNavigation();
  const { globalScale, highContrast } = useApp();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, highContrast && { backgroundColor: '#000' }]}>



        <Text
          style={[
            styles.title,
            { fontSize: 22 * globalScale },
            highContrast && { color: '#fff' }
          ]}
        >
          Tutoriais disponíveis
        </Text>

        <View style={styles.grid}>
          {lessons.map((l) => (
            <Pressable
              key={l.id}
              style={[
                styles.card,
                highContrast && { backgroundColor: '#111', borderColor: '#fff' }
              ]}
              onPress={() => navigation.navigate('Lesson', { id: l.id })}
            >
              <Image
                source={{ uri: 'https://img.icons8.com/?size=512&id=99274&format=png' }}
                style={styles.icon}
              />
              <Text
                style={[
                  styles.cardText,
                  { fontSize: 18 * globalScale },
                  highContrast && { color: '#fff' }
                ]}
              >
                {l.title}
              </Text>
            </Pressable>
          ))}
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#286a4e',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#286a4e',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
