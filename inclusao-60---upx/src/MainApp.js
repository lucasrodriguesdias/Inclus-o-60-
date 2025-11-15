import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { AppProvider, useApp } from './context/AppContext';

import HomeScreen from './screens/HomeScreen';
import ModulesScreen from './screens/ModulesScreen';
import LessonScreen from './screens/LessonScreen';
import QuizScreen from './screens/QuizScreen';
import SettingsScreen from './screens/SettingsScreen';
import QuizResultScreen from './screens/QuizResultScreen';
import TestModulesScreen from './screens/TestModulesScreen';
import AboutAppScreen from './screens/AboutAppScreen';
import FontButtons from './components/FontButtons';

const Stack = createNativeStackNavigator();

function ContrastToggle() {
  const { highContrast, setHighContrast } = useApp();
  return (
    <View style={styles.grid}>
      <FontButtons />
      <Pressable
        onPress={() => setHighContrast(!highContrast)}
        accessibilityRole="switch"
        accessibilityLabel={
          highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'
        }
        style={[
          styles.contrastButton,
          { backgroundColor: highContrast ? '#7a7a7a' : '#fff' },
        ]}>
        <Text style={styles.contrastText}>{highContrast ? '⚪' : '⚫'}</Text>
      </Pressable>
    </View>
  );
}

function RootNavigator() {
  const { highContrast } = useApp();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: highContrast ? '#000' : '#F7F7F7',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerRight: () => <ContrastToggle />,
          headerStyle: {
            backgroundColor: highContrast ? '#1F1B24' : '#286a4e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inclusão Digital 60+' }}
        />
        <Stack.Screen
          name="Modules"
          component={ModulesScreen}
          options={{ title: 'Tutoriais' }}
        />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{ title: 'Aula' }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Configurações' }}
        />
        <Stack.Screen
          name="QuizResult"
          component={QuizResultScreen}
          options={{ title: 'Resultado' }}
        />
        <Stack.Screen
          name="Testes"
          component={TestModulesScreen}
          options={{ title: 'Testes' }}
        />
        <Stack.Screen
          name="About"
          component={AboutAppScreen}
          options={{ title: 'Sobre o App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function MainApp() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  contrastButton: {
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    marginTop: -6,
  },
  contrastText: {
    fontSize: 18,
    fontWeight: '800',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 5,
  },
});
