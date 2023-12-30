// ReservationManagement.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ReservationManagement = () => {
  // Örnek rezervasyonlar
  const [reservations, setReservations] = useState([
    { id: '1', name: 'Rezervasyon 1', date: '2023-01-01', time: '12:00' },
    { id: '2', name: 'Rezervasyon 2', date: '2023-02-01', time: '14:30' },
    // ... diğer rezervasyonlar
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervasyon Yönetimi</Text>
      {reservations.length > 0 ? (
        <FlatList
          data={reservations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.reservationItem}>
              <Text>{item.name}</Text>
              <Text>Tarih: {item.date}</Text>
              <Text>Saat: {item.time}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Henüz bir rezervasyon yapılmamış.</Text>
      )}
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
  reservationItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
  },
});

export default ReservationManagement;