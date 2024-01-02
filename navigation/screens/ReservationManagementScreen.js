// ReservationManagementScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ReservationManagementScreen = () => {
    // Örnek rezervasyonlar
    //     const [reservations, setReservations] = useState([]);
    const [reservations, setReservations] = useState([
        { id: '1', name: 'Futbol Sahası', date: '2023-01-01', time: '12:00' },
        { id: '2', name: 'Basketbol Sahası', date: '2023-02-01', time: '14:30' },
        // ... diğer rezervasyonlar
    ]);

    /*
    useEffect(() => {
        // Backend API endpoint
        const backendApiEndpoint = 'https://849e-188-119-40-246.ngrok-free.app/reservations/listReservation';

        // Axios ile backend'den rezervasyonları getirme
        axios.get(backendApiEndpoint)
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error('Error getting reservations:', error);
                // Hata durumunda uygun şekilde işleyin
            });
    }, []); 
    */

    const [selectedReservation, setSelectedReservation] = useState(null);

    const handleCancelReservation = () => {
        if (selectedReservation) {

            const { id } = selectedReservation;

            const backendApiEndpoint = 'https://849e-188-119-40-246.ngrok-free.app/reservations/deleteReservation';
            
            
            const requestData = {
                id: id,
            };

            axios.post(backendApiEndpoint, requestData)
                .then(response => {
                    console.log('Reservation canceled successfully:', response.data);
                    // Backend başarıyla yanıt verdiğinde yerel state'i güncelle
                    const updatedReservations = reservations.filter(item => item.id !== id);
                    setReservations(updatedReservations);
                    setSelectedReservation(null);
                })
                .catch(error => {
                    console.error('Error canceling reservation:', error);
                    // Hata durumunda uygun şekilde işleyin
                });


            const updatedReservations = reservations.filter((item) => item.id !== selectedReservation.id);
            setReservations(updatedReservations);
            setSelectedReservation(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rezervasyon Yönetimi</Text>
            {reservations.length > 0 ? (
                <FlatList
                    data={reservations}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedReservation(item)}
                            style={[
                                styles.reservationItem,
                                selectedReservation && selectedReservation.id === item.id && styles.selectedItem,
                            ]}
                        >
                            <Text style={styles.reservationText}>{item.name}</Text>
                            <Text style={styles.reservationText}>Tarih: {item.date}</Text>
                            <Text style={styles.reservationText}>Saat: {item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <Text>Henüz bir rezervasyon yapılmamış.</Text>
            )}

            {selectedReservation && (
                <TouchableOpacity onPress={handleCancelReservation} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>İptal Et</Text>
                </TouchableOpacity>
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
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 8,
        padding: 8,
        marginVertical: 8,
    },
    selectedItem: {
        backgroundColor: 'lightgreen',
    },
    reservationText: {
        fontSize: 16,
        marginBottom: 4,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 8,
        marginTop: 16,
    },
    cancelButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ReservationManagementScreen;
