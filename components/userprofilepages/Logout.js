// Logout.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles';

const Logout = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Do you want Logout?</Text>
            <Button title="Logout" onPress={() => {navigation.navigate('LoginScreen')} } />
        </View>
    );
};

export default Logout;
