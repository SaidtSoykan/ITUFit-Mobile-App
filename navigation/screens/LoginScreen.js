import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles';

export function LoginScreen(props) {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  

  const RegisterScreen = ({ setIsLoginScreen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleRegister = async () => {
      try {
        const requestData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };

        // Backend'e kayıt isteği gönderilir
        const response = await axios.post('https://c4f3-176-42-133-250.ngrok-free.app/students/register', requestData);

        if (response.data.success) {

          // Kayıt başarılı mesajı
          Alert.alert('Success', 'Registration successful. You can now login with your credentials.');

          // Login ekranına geri dön
          setIsLoginScreen(true);
        } else {
          // Backend kayıt başarısız
          Alert.alert('Error', response.data.message || 'Registration failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        Alert.alert('Error', 'An error occurred during registration. Please try again.');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Ad"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Soyad"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Kayıt Ol" onPress={handleRegister} />
        <Button title="Giriş Ekranına Dön" onPress={() => setIsLoginScreen(true)} />
      </View>
    );
  };

  const LoginPage = ({ setIsLoginScreen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
      try {
        const requestData = {
          email: email,
          password: password,
        };

        // Backend'e giriş isteği gönderilir
        const response = await axios.post('https://c4f3-176-42-133-250.ngrok-free.app/students/login', requestData);

        if (response.data.success) {
          // Giriş başarılıysa, kullanıcı bilgilerini saklayabilirsiniz (isteğe bağlı)
          const { jwtToken, userId } = response.data.data;
          await AsyncStorage.setItem('userId', userId.toString());

          // Kullanıcı girşi başarılı mesajı
          

          // props.authorize fonksiyonunu düzenleyerek kullanıcı bilgilerini saklayabilirsiniz
          props.authorize(true, userId, jwtToken);
          // Alert.alert('Success', 'Login successful. Welcome back, user ID: ' + userId);
        } else {
          // Backend authentication failed
          Alert.alert('Error', response.data.message || 'Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Error', 'An error occurred during login. Please try again.');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Giriş Yap" onPress={handleLogin} />
        <Button title="Kayıt Ol" onPress={() => setIsLoginScreen(false)} />
      </View>
    );
  };

  return isLoginScreen ? (
    <LoginPage setIsLoginScreen={setIsLoginScreen} />
  ) : (
    <RegisterScreen setIsLoginScreen={setIsLoginScreen} />
  );
}

export default LoginScreen;
