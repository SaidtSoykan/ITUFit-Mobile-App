// ReservationManagementScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ReservationManagementScreen = () => {
    
    const [reservations, setReservations] = useState([]);
    const [selectedReservation, setSelectedReservation] = useState(null);

    const fetchReservations = async () => {
        const userId = await AsyncStorage.getItem('userId');
        const requestData = {
            userId: userId,
        };
        const backendApiEndpoint = 'http://13.50.243.223:8080/reservations/listReservation';

        try {
            const response = await axios.post(backendApiEndpoint, requestData);
            setReservations(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error getting reservations:', error);
            // Handle the error appropriately
        }
    };

    useEffect(() => {
        // Initial fetch of reservations
        fetchReservations();
    }, []);
    
    useFocusEffect(
        React.useCallback(() => {
            fetchReservations();
        }, []) // Empty dependency array means it only runs when the component mounts and unmounts
    );

    const handleCancelReservation = () => {
        if (selectedReservation) {
            const { reservationId } = selectedReservation;
            
            const backendApiEndpoint = 'http://13.50.243.223:8080/reservations/deleteReservation';

            const requestData = {
                id: reservationId,
            };

            axios.post(backendApiEndpoint, requestData)
                .then(response => {
                    console.log('Reservation canceled successfully:', response.data);

                    // After canceling, fetch the updated reservations
                    fetchReservations();

                    setSelectedReservation(null);
                })
                .catch(error => {
                    console.error('Error canceling reservation:', error);
                    // Handle the error appropriately
                });
        }
    };
    const fetchData = async () => {
        const userId = await AsyncStorage.getItem('userId');
        const requestData = {
            userId: userId,
        };
        const backendApiEndpoint = 'http://13.50.243.223:8080/reservations/listReservation';

        // Axios ile backen'denrezervasyonları getirme
        axios.post(backendApiEndpoint, requestData)
            .then(response => {
                setReservations(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error getting reservations:', error);
                // Hata durumunda ugun şekilde işleyin
            });
    }

    
    useEffect( () => {
        // Bacend AI enpoint
        fetchData();
        
    }, []); 
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rezervasyon Yönetimi</Text>
            {reservations.length > 0 ? (
                <FlatList
                    data={reservations}
                    keyExtractor={(item) => item.reservationId}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedReservation(item)}
                            style={[
                                styles.reservationItem,
                                selectedReservation && selectedReservation.reservationId === item.reservationId && styles.selectedItem,
                            ]}
                        >
                            <Text style={styles.reservationText}>{item.facilityType}</Text>
                            <Text style={styles.reservationText}>Tarih: {item.date}</Text>
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
