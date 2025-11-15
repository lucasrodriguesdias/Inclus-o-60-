import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import LargeButton from '../components/LargeButton';

export default React.memo(function LessonCard({ title, done, id, navigation }) {
  const { globalScale, highContrast } = useApp();
  return (
    <View
    
      style={[
        styles.card,
        highContrast && { backgroundColor: '#111', borderColor: '#fff' },
      ]}>
           {' '}
      <Text
        style={[
          styles.title,
          { fontSize: 17 * globalScale },
          highContrast && { color: '#fff' },
        ]}>
                {title}     {' '}
      </Text>
 
           {' '}
           <LargeButton
        label="Abrir"
        onPress={() => navigation.navigate('Lesson', { id })}
      />
      {done ? (
        <Text
          style={[
            styles.badge,
            highContrast && {
              backgroundColor: '#0a0',
              color: '#fff',
              borderColor: '#0a0',
            },
          ]}>
                    Concluída        {' '}
        </Text>
      ) : null}
         {' '}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#286a4e',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  title: { fontWeight: '700', color: '#234E52' },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
    backgroundColor: '#C6F6D5',
    color: '#22543D',
    borderWidth: 1,
    borderColor: '#68D391',
  },
});
