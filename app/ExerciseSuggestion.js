// ExerciseSuggestion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseSuggestion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Egzersiz Önerisi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default ExerciseSuggestion;
