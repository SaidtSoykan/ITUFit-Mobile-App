// ChangePassword.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
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

export default ChangePassword;
