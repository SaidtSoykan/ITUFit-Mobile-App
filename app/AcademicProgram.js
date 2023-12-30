// AcademicProgram.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcademicProgram = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akademik Program</Text>
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

export default AcademicProgram;
