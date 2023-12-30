// Reservation.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Reservation = () => {
  const [reservationName, setReservationName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const handleCreateReservation = () => {
    // Burada rezervasyon oluşturma işlemlerini gerçekleştirebilirsiniz
    console.log('Rezervasyon Oluşturuluyor: ', reservationName, reservationDate, reservationTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervasyon Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Rezervasyon Adı"
        onChangeText={(text) => setReservationName(text)}
        value={reservationName}
      />
      <TextInput
        style={styles.input}
        placeholder="Rezervasyon Tarihi"
        onChangeText={(text) => setReservationDate(text)}
        value={reservationDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Rezervasyon Saati"
        onChangeText={(text) => setReservationTime(text)}
        value={reservationTime}
      />
      <Button title="Rezervasyon Oluştur" onPress={handleCreateReservation} />
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default Reservation;
