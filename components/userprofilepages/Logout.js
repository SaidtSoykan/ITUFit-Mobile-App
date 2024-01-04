import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';

function LogoutScreen(props) {
  const handleLogout = () => {
    try {
      // Çıkış yapılacak işlemleri ekleyebilirsiniz, örneğin sunucuya logout isteği gönderme
      // Bu örnekte, sadece authorize fonksiyonu çağrılarak kullanıcı bilgileri temizleniyor.
      props.authorize(false, null, null);

      // Çıkış başarılı
      console.log('Çıkış Başarılı');

      // İstediğiniz bir sayfaya yönlendirme yapabilirsiniz
      // Örneğin:
      // props.navigation.navigate('AnaSayfa');
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error', 'An error occurred during logout. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      {/* İstediğiniz çıkış yapma işlemlerini gerçekleştiren bir buton ekleyebilirsiniz */}
      <Button title="Çıkış Yap" onPress={handleLogout} />
    </View>
  );
}

export default LogoutScreen;