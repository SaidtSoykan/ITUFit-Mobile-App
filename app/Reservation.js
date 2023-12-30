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
  const [selectedFacility, setSelectedFacility] = useState(null); // Yeni state
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Yeni state  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null); // Yeni state
  const [reservationTime, setReservationTime] = useState('');
  const [showCalendar, setShowCalendar] = useState(false); // Yeni state
  const [showTimeSlots, setShowTimeSlots] = useState(false); // Yeni state
  const [showFacilities, setShowFacilities] = useState(true); // Yeni state
  const [showCreateButton, setShowCreateButton] = useState(false); // Yeni state

  const facilities = [
    { id: '1', name: 'Futbol Sahası A', type: 'Futbol' },
    { id: '2', name: 'Basketbol Sahası B', type: 'Basketbol' },
    // Diğer tesisleri ekleyebilirsiniz
  ];

  const handleCreateReservation = () => {
    console.log('Rezervasyon Oluşturuluyor: ', reservationTime);
  };

  const handleFacilityPress = (facility) => {
    console.log('Tesis Seçildi: ', facility);
    setSelectedFacility(facility);
    setShowFacilities(false);
    setShowCalendar(true); // Tesis kartına tıklandığında takvimi göster
   
  };

  const handleTimeSlotPress = (startTime, endTime) => {
    console.log('Seçilen Zaman Aralığı: ', startTime, endTime);
    setSelectedTimeSlot(`${startTime}-${endTime}`);
    setShowCreateButton(true);
    setShowTimeSlots(false);
    // Burada seçilen zaman aralığına göre işlemleri gerçekleştirebilirsiniz
  };

  const handleCalendarClose = () => {
    setShowCalendar(false); // Takvim kapatıldığında
    setShowFacilities(true);
    setShowCreateButton(false);
  };

  const handleDayPress = (day) => {
    console.log('Seçilen Gün: ', day.dateString);
    setSelectedDay(day.dateString);
    setSelectedDate(day.dateString); // Bu satırı ekleyerek takvimde de seçilen günü işaretleyebiliriz
    setShowTimeSlots(true);
    setShowCalendar(false);
  };



  return (
    <View style={styles.container}>
      {showFacilities && (
        <FlatList
          data={facilities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FacilityCard facility={item} onPress={() => handleFacilityPress(item)} />
          )}
        />
      )}

      {showCalendar && (
        <View style={styles.calendarContainer}>
          
          <Calendar
            onDayPress={handleDayPress}
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
          
          onClose={() => setShowTimeSlots(false)}
          onTimeSlotPress={handleTimeSlotPress}
        />
      )}

      {showCreateButton && (
        <View>
          <Text>{`Tesis Seçildi: ${selectedFacility.name} (${selectedFacility.type})`}</Text>
          <Text>{`Seçilen Zaman Aralığı: ${selectedTimeSlot}`}</Text>
          <Text>{`Seçilen Gün: ${selectedDay}`}</Text>
          <Button title="Rezervasyon Oluştur" onPress={handleCreateReservation} />
        </View>
        )}
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
