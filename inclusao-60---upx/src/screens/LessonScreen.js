import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Linking, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { lessons } from '../data/lessons';
import { useApp } from '../context/AppContext';

export default function LessonScreen({ route, navigation }) {
  const { id } = route.params;
  const lesson = useMemo(() => lessons.find((l) => l.id === id), [id]);

  const { globalScale, highContrast, toggleProgress } = useApp();

  const [stepIndex, setStepIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  if (!lesson) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Lição não encontrada.</Text>
      </View>
    );
  }

  const step = lesson.steps[stepIndex];

  const speak = async () => {
    try {
      if (isSpeaking) {
        Speech.stop();
        setIsSpeaking(false);
        return;
      }
      setIsSpeaking(true);
      await Speech.speak(step.text, {
        language: 'pt-BR',
        rate: 0.95,
        pitch: 1.0,
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
      });
    } catch (error) {
      console.warn('Erro ao reproduzir fala:', error);
      setIsSpeaking(false);
    }
  };

  const next = () => {
    Speech.stop();
    setIsSpeaking(false);

    if (stepIndex < lesson.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      toggleProgress(lesson.id);
      navigation.navigate('Quiz', { id: lesson.id });
    }
  };

  const goBackStep = () => {
    if (stepIndex > 0) {
      Speech.stop();
      setIsSpeaking(false);
      setStepIndex(stepIndex - 1);
    }
  };

  const openVideo = () => {
    if (lesson.introVideo) {
      Linking.openURL(lesson.introVideo);
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

        {/* TÍTULO */}
        <Text
          style={[
            styles.title,
            { fontSize: 22 * globalScale },
            highContrast && { color: '#fff' },
          ]}
        >
          {lesson.title}
        </Text>

        {/* TEXTO DA AULA */}
        <View
          style={[
            styles.stepBox,
            highContrast && { backgroundColor: '#111', borderColor: '#fff' },
          ]}
        >
          <Text
            accessibilityLiveRegion="polite"
            style={[
              styles.stepText,
              { fontSize: 18 * globalScale, lineHeight: 26 * globalScale },
              highContrast && { color: '#fff' },
            ]}
          >
            {step.text}
          </Text>
        </View>

        {/* BOTÕES PRINCIPAIS */}
        <View style={styles.row}>

          {/* VOLTAR */}
          <Pressable
            accessibilityRole="button"
            onPress={goBackStep}
            disabled={stepIndex === 0}
            style={[
              styles.ctrl,
              {
                backgroundColor: stepIndex === 0 ? '#BDBDBD' : '#4A5568',
                opacity: stepIndex === 0 ? 0.4 : 1,
              },
            ]}
          >
            <Text
              style={[
                styles.ctrlText,
                { fontSize: 16 * globalScale },
              ]}
            >
              Voltar
            </Text>
          </Pressable>

          {/* OUVIR */}
          <Pressable
            accessibilityRole="button"
            onPress={speak}
            style={[
              styles.ctrl,
              { backgroundColor: isSpeaking ? '#E53E3E' : '#FFB94F' },
            ]}
          >
            <Text
              style={[
                styles.ctrlText,
                { fontSize: 16 * globalScale },
              ]}
            >
              {isSpeaking ? '⏹ Parar' : '🔊 Ouvir'}
            </Text>
          </Pressable>

          {/* PRÓXIMO */}
          <Pressable
            accessibilityRole="button"
            onPress={next}
            style={[styles.ctrl, { backgroundColor: '#286a4e' }]}
          >
            <Text
              style={[
                styles.ctrlText,
                { fontSize: 16 * globalScale },
              ]}
            >
              {stepIndex < lesson.steps.length - 1 ? 'Próximo' : 'Concluir'}
            </Text>
          </Pressable>

        </View>

        {/* --- VÍDEO TUTORIAL --- */}
        {lesson.introVideo && (
          <View style={styles.videoSection}>
            <Text
              style={[
                styles.videoLabel,
                { fontSize: 16 * globalScale },
                highContrast && { color: '#fff' },
              ]}
            >
              🎥 Assista ao vídeo tutorial:
            </Text>

            <Pressable
              onPress={openVideo}
              style={styles.thumbnailWrapper}
              accessibilityRole="button"
              accessibilityLabel="Abrir vídeo tutorial"
            >
              <Image
                source={require('../assets/icons/play.png')}
                style={styles.thumbnail}
              />
              <Text
                style={[
                  styles.watchText,
                  { fontSize: 16 * globalScale },
                ]}
              >
                Tocar vídeo
              </Text>
            </Pressable>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontWeight: '800', marginBottom: 16, textAlign: 'center' },

  stepBox: {
    borderWidth: 2,
    borderColor: '#CBD5E0',
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  stepText: {
    textAlign: 'justify',
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },

  ctrl: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  ctrlText: {
    color: '#fff',
    fontWeight: '700',
  },

  videoSection: {
    marginTop: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 16,
  },

  videoLabel: {
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  thumbnailWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },

  watchText: {
    color: '#286a4e',
    fontWeight: '700',
  },
});
