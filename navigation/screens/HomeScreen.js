// Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const handleReservation = () => {
        // Burada rezervasyon ekranına geçiş yapabilirsiniz
        navigation.navigate('Reservation');
        console.log('Rezervasyon ekranına geçiş yapılıyor...');
    };

    const handleCreateProgram = () => {
        // Burada program oluşturma ekranına geçiş yapabilirsiniz
        navigation.navigate('CreateProgram');
        console.log('Program oluşturma ekranına geçiş yapılıyor...');
    };

    const checkReservations = () => {
        // Burada program oluşturma ekranına geçiş yapabilirsiniz
        navigation.navigate('ReservationManagement');
        console.log('Rezervasyon takip ekranına geçiş yapılıyor...');
    };

    const Comments = () => {
        // Burada program oluşturma ekranına geçiş yapabilirsiniz
        navigation.navigate('Comments');
        console.log('Comments ekranına geçiş yapılıyor...');
    };

    const SeeRanks = () => {
        // Burada program oluşturma ekranına geçiş yapabilirsiniz
        navigation.navigate('RankingPage');
    };

    const UserProfile = () => {
        // Burada program oluşturma ekranına geçiş yapabilirsiniz
        navigation.navigate('UserProfile');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ana Ekran</Text>
            <View style={styles.buttonContainer}>
                <Button title="Rezervasyon Yap" onPress={handleReservation} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Rankings " onPress={SeeRanks} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Program Oluştur" onPress={handleCreateProgram} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Reservations" onPress={checkReservations} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Comments" onPress={Comments} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="UserProfile" onPress={UserProfile} />
            </View>

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
    buttonContainer: {
        marginTop: 12,
    },
});

export default Home;
