// PersonalInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Bilgileri</Text>
      <Text style={styles.text}>Ad: John Doe</Text>
      <Text style={styles.text}>Email: john.doe@example.com</Text>
      <Text style={styles.text}>Telefon: 555-1234</Text>
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
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default PersonalInfo;

