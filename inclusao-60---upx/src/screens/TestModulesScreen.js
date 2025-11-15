import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function TestModulesScreen() {
  const navigation = useNavigation();
  const { globalScale, highContrast } = useApp();

  const modules = [
    {
      id: 'whatsapp-basico',
      title: 'Quiz WhatsApp',
      icon: require('../assets/icons/whatsapp.png'),
    },
    {
      id: 'pix-como-usar',
      title: 'Quiz PIX',
      icon: require('../assets/icons/pix.png'),
    },
    {
      id: 'email-basico',
      title: 'Quiz E-mail',
      icon: require('../assets/icons/email.png'),
    },
  ];

  const Card = ({ title, icon, id }) => (
    <Pressable
      style={[
        styles.card,
        highContrast && { backgroundColor: '#000', borderColor: '#fff' },
      ]}
      onPress={() => navigation.navigate('Quiz', { id })}>
      <Image source={icon} style={styles.icon} />
      <Text
        style={[
          styles.cardText,
          { fontSize: 18 * globalScale },
          highContrast && { color: '#fff' },
        ]}>
        {title}
      </Text>
    </Pressable>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          styles.container,
          highContrast && { backgroundColor: '#1F1B24' },
        ]}>
        <Text
          style={[
            styles.title,
            { fontSize: 24 * globalScale },
            highContrast && { color: '#fff' },
          ]}>
          Escolha o teste:
        </Text>

        {modules.map((m) => (
          <Card key={m.id} title={m.title} id={m.id} icon={m.icon} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontWeight: '800',
    marginBottom: 20,
    color: '#286a4e',
    textAlign: 'center',
  },

  card: {
    width: '90%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#286a4e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    elevation: 3,
  },

  icon: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },

  cardText: {
    fontWeight: '700',
    color: '#1a202c',
    textAlign: 'center',
  },
});
