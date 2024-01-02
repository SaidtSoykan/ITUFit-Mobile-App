// ChangePassword.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Örnek kontroller
    if (currentPassword === 'gecerli_sifre' && newPassword === confirmNewPassword) {
      // Şifre değiştirme işlemleri burada gerçekleştirilebilir.
      Alert.alert('Başarılı', 'Şifre değiştirildi!');
    } else {
      Alert.alert('Hata', 'Geçersiz şifre veya yeni şifreler eşleşmiyor.');
    }
  };

  /*
  const handleChangePassword = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmNewPassword,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Password changed successfully!');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error while changing password:', error);
      Alert.alert('Error', 'An error occurred while changing password.');
    }
  };

  */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.label}>Mevcut Şifre</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <Text style={styles.label}>Yeni Şifre</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Text style={styles.label}>Yeni Şifre Tekrar</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />

      <Button title="Şifreyi Değiştir" onPress={handleChangePassword} />
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2, // Kenarları kalın yap
    borderRadius: 10, // Köşeleri yuvarlak yap
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ChangePasswordScreen;
