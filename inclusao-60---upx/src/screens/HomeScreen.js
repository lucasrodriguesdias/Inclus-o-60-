import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';



export default function HomeScreen() {
  const navigation = useNavigation();
  const { globalScale, highContrast } = useApp();

  const Card = ({ title, icon, screen }) => (
    <Pressable
      style={[
        styles.card,
        highContrast && { backgroundColor: '#111', borderColor: '#fff' },
      ]}
      onPress={() => navigation.navigate(screen)}
    >
      <Image source={ icon } style={styles.icon} />
      <Text style={[styles.cardText, highContrast && { color: '#fff' }]}>
        {title}
      </Text>
    </Pressable>
  );

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, highContrast && { backgroundColor: '#000' }]}>
  

        <Text
          style={[
            styles.title,
            { fontSize: 24 * globalScale },
            highContrast && { color: '#fff' },
          ]}
        >
          Bem-vindo(a)!
        </Text>

        <Text
          style={[
            styles.subtitle,
            { fontSize: 16 * globalScale },
            highContrast && { color: '#fff' },
          ]}
        >
          Aprenda passo a passo a usar WhatsApp, PIX e E-mail com autonomia.
        </Text>

        <View style={styles.grid}>
          <Card title="Aulas" icon={require('../assets/icons/class.png')} screen="Modules" />
          <Card title="Testes" icon={require('../assets/icons/quizz.png')} screen="Testes" />
          <Card title="Configurações" icon={require('../assets/icons/config.png')} screen="Settings" />
          <Card title="Sobre o App" icon={require('../assets/icons/info.png')} screen="About" />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: '800',
    color: '#286a4e',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    width: 140,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#286a4e',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a202c',
    textAlign: 'center',
  },
  fontButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 30,
  },
  fontButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  fontText: {
    color: '#1a202c',
    fontWeight: '700',
  },
});
