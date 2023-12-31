// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const Login = ({ navigation }, props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada kullanıcı girişini işleyebilirsiniz
    console.log('Kullanıcı Girişi: ', username, password);
    // Örneğin, bir API çağrısı yapabilir ve giriş durumunu kontrol edebilirsiniz

    // Kullanıcı başarılı bir şekilde giriş yaptığında, "Home" ekranına geçiş yapabilirsiniz.
    navigation.navigate('Home');
  };

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

export default Login;
