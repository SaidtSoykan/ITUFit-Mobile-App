// UserProfile.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserProfile = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    // Verilen sayfa adına göre yönlendirme yapar
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Profili</Text>

      <Button title="Personel Info" onPress={() => navigateToPage('PersonalInfo')} />
      <Button title="Academic Program" onPress={() => navigateToPage('AcademicProgram')} />
      <Button title="Exercise Suggestion" onPress={() => navigateToPage('ExerciseSuggestion')} />
      <Button title="Change Password" onPress={() => navigateToPage('ChangePassword')} />
      <Button title="Logout" onPress={() => navigateToPage('Logout')} />
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
});

export default UserProfile;
