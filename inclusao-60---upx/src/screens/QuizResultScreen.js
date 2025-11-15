import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QuizResultScreen({ route }) {
  const { correct, total, lessonId } = route.params;
  const navigation = useNavigation();

  const message =
    correct === total
      ? 'Excelente! Você acertou tudo.'
      : correct >= total / 2
      ? 'Muito bom! Continue praticando.'
      : 'Não desanime! Tente novamente e você vai aprender.';

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Resultado do Quiz</Text>

        <Text style={styles.result}>
          {correct} / {total} acertos
        </Text>

        <Text style={styles.message}>{message}</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.replace('Quiz', { id: lessonId })}>
          <Text style={styles.buttonText}>Refazer Quiz</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#286a4e' }]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Voltar ao início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 24, fontWeight: '800', marginBottom: 16 },
  result: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 10,
    color: '#286a4e',
  },
  message: { fontSize: 18, marginBottom: 24, textAlign: 'center' },
  button: {
    padding: 16,
    width: '70%',
    backgroundColor: '#FFB94F',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: { fontSize: 18, fontWeight: '700' },
});
