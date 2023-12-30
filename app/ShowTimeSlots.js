// ShowTimeSlots.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ShowTimeSlots = ({ selectedDate, onClose, onTimeSlotPress }) => {
  // Örnek zaman aralıkları
  const timeSlots = [
    { id: '1', startTime: '08:00', endTime: '10:00' },
    { id: '2', startTime: '10:00', endTime: '12:00' },
    // Diğer zaman aralıklarını ekleyebilirsiniz
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Zaman Aralıkları (${selectedDate})`}</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.timeSlotItem}
            onPress={() => onTimeSlotPress(item.startTime, item.endTime)}
          >
            <Text>{`${item.startTime} - ${item.endTime}`}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Kapat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  timeSlotItem: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ShowTimeSlots;
