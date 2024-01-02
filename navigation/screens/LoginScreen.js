// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

function LoginScreen (props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Burada kullanıcı girişini işleyebilirsiniz
        console.log('Kullanıcı Girişi: ', username, password);
        props.authorize(true);
    };

    /*
    const handleLogin = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        // Backend authentication successful
        console.log('Kullanıcı Girişi Başarılı: ', username);
        props.authorize(true);
      } else {
        // Backend authentication failed
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An error occurred during login. Please try again.');
    }
  };
    */

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Kullanıcı Adı"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Button title="Giriş Yap" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
