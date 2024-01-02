import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles';

function UserInfo(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Bilgileri</Text>
            <Text style={styles.text}>Ad: John Doe</Text>
            <Text style={styles.text}>Email: john.doe@example.com</Text>
            <Text style={styles.text}>Telefon: 555-1234</Text>
        </View>
    );
};

export default UserInfo;

