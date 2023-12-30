import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';  // Make sure to include this line
import FacilityCard from './FacilityCard';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import ShowTimeSlots from './ShowTimeSlots';

LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  monthNamesShort: ['Oca.', 'Şub.', 'Mar.', 'Nis.', 'May.', 'Haz.', 'Tem.', 'Ağu.', 'Eyl.', 'Eki.', 'Kas.', 'Ara.'],
  dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  dayNamesShort: ['Paz.', 'Pzt.', 'Sal.', 'Çar.', 'Per.', 'Cum.', 'Cmt.'],
};

LocaleConfig.defaultLocale = 'tr';
const Reservation = () => {
  const [reservationName, setReservationName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservationTime, setReservationTime] = useState('');
  const [showCalendar, setShowCalendar] = useState(false); // Yeni state
  const [showTimeSlots, setShowTimeSlots] = useState(false); // Yeni state

  const facilities = [
    { id: '1', name: 'Futbol Sahası A', type: 'Futbol' },
    { id: '2', name: 'Basketbol Sahası B', type: 'Basketbol' },
    // Diğer tesisleri ekleyebilirsiniz
  ];

  const handleCreateReservation = () => {
    console.log('Rezervasyon Oluşturuluyor: ', reservationName, selectedDate, reservationTime);
  };

  const handleFacilityPress = (facility) => {
    console.log('Tesis Seçildi: ', facility);
    setShowCalendar(true); // Tesis kartına tıklandığında takvimi göster
  };

  const handleTimeSlotPress = (startTime, endTime) => {
    console.log('Seçilen Zaman Aralığı: ', startTime, endTime);
    // Burada seçilen zaman aralığına göre işlemleri gerçekleştirebilirsiniz
  };

  const handleCalendarClose = () => {
    setShowCalendar(false); // Takvim kapatıldığında
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
      <FlatList
        data={facilities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FacilityCard facility={item} onPress={() => handleFacilityPress(item)} />
        )}
      />
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setShowTimeSlots(true);
            }}
            monthFormat={'MMMM yyyy'}
            markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true } }}
            theme={{
              selectedDayBackgroundColor: '#3498db',
              todayTextColor: '#3498db',
              arrowColor: '#3498db',
            }}
          />
          <TouchableOpacity onPress={handleCalendarClose} style={styles.closeCalendarButton}>
            <Text style={styles.closeCalendarText}>Kapat</Text>
          </TouchableOpacity>
        </View>
      )}
      {showTimeSlots && (
        <ShowTimeSlots
          selectedDate={selectedDate}
          onClose={() => setShowTimeSlots(false)}
          onTimeSlotPress={handleTimeSlotPress}
        />
      )}
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
  // ... (diğer stiller)

  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  closeCalendarButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  closeCalendarText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Reservation;
