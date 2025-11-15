import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { lessons } from '../data/lessons';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';

export default function QuizScreen({ route }) {
  const lessonId = route?.params?.id;
  const navigation = useNavigation();

  const { globalScale, highContrast } = useApp();

  const items = useMemo(
    () =>
      lessonId
        ? lessons.find((l) => l.id === lessonId)?.quiz || []
        : lessons.flatMap((l) => l.quiz || []),
    [lessonId]
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  if (items.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nenhuma pergunta disponível.</Text>
      </View>
    );
  }

  const q = items[index];

  const submit = () => {
    const isCorrect = selected === q.correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);

    if (index < items.length - 1) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      navigation.replace('QuizResult', {
        correct: isCorrect ? correctCount + 1 : correctCount,
        total: items.length,
        lessonId,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View
      style={[
        styles.container,
        highContrast && { backgroundColor: '#000' },
      ]}
    >
      <Text
        style={[
          styles.question,
          { fontSize: 22 * globalScale },
          highContrast && { color: '#fff' },
        ]}
      >
        {q.question}
      </Text>

      {q.options.map((opt, i) => (
        <Pressable
          key={i}
          onPress={() => setSelected(i)}
          style={[
            styles.option,
            selected === i && styles.optionSelected,
            highContrast && {
              backgroundColor: selected === i ? '#333' : '#000',
              borderColor: '#fff',
            },
          ]}
        >
          {/* Radio Button */}
          <View
            style={[
              styles.radioCircle,
              highContrast && { borderColor: '#fff' },
            ]}
          >
            {selected === i && (
              <View
                style={[
                  styles.radioSelected,
                  highContrast && { backgroundColor: '#fff' },
                ]}
              />
            )}
          </View>

          {/* Texto da opção */}
          <Text
            style={[
              styles.optionText,
              { fontSize: 18 * globalScale },
              highContrast && { color: '#fff' },
            ]}
          >
            {opt}
          </Text>
        </Pressable>
      ))}

      <Pressable
        onPress={submit}
        style={[
          styles.submit,
          { opacity: selected === null ? 0.5 : 1 },
        ]}
        disabled={selected === null}
      >
        <Text
          style={[
            styles.submitText,
            { fontSize: 18 * globalScale },
          ]}
        >
          {index < items.length - 1 ? 'Próxima' : 'Finalizar'}
        </Text>
      </Pressable>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  question: {
    fontWeight: '800',
    marginBottom: 20,
    color: '#286a4e',
    textAlign: 'center',
  },

  option: {
    padding: 16,
    borderWidth: 2,
    borderColor: '#A0AEC0',
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  optionSelected: {
    borderColor: '#286a4e',
    backgroundColor: '#E6FFFA',
    elevation: 4,
  },

  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#286a4e',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#286a4e',
  },

  optionText: {
    fontWeight: '600',
    color: '#333',
    flexShrink: 1,
  },

  submit: {
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#286a4e',
    alignItems: 'center',
    elevation: 4,
  },

  submitText: {
    color: '#fff',
    fontWeight: '800',
  },
});
