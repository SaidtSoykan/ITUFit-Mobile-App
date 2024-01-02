import React from 'react';
import { Text, Button, View } from 'react-native';
import styles from '../styles';

const UserProfileMain = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Profili</Text>
            <Button title="User Info" onPress={() => navigation.push("UserInfo")} />
            <Button title="Academic Program" onPress={() => navigation.push("AcademicProgram")} />
            <Button title="Exercise Suggestion" onPress={() => navigation.push("ExerciseSuggestion")} />
            <Button title="Change Password" onPress={() => navigation.push("ChangePassword")} />
            <Button title="Logout" onPress={() => navigation.push("Logout")} />
        </View>

    );
};

export default UserProfileMain;
