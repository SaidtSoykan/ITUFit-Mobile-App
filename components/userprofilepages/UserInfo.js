import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const PersonalInfoScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [basalMetabolism, setBasalMetabolism] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [preferredSports, setPreferredSports] = useState([]);
  const [savedInfo, setSavedInfo] = useState(null);

  const calculateBasalMetabolism = () => {
    const heightInMeters = height / 100;
    const calculatedBasalMetabolism = 10 * weight + 6.25 * heightInMeters * 100 - 5;
    setBasalMetabolism(calculatedBasalMetabolism.toFixed(2));
  };

  const handleSportSelection = (sport) => {
    const updatedSports = preferredSports.includes(sport)
      ? preferredSports.filter((selectedSport) => selectedSport !== sport)
      : [...preferredSports, sport];

    setPreferredSports(updatedSports);
  };

  const handleSave = () => {
    calculateBasalMetabolism(); // Calculate Basal Metabolism when Save is pressed
    setSavedInfo({
      weight: weight,
      height: height,
      basalMetabolism: basalMetabolism,
      desiredWeight: desiredWeight,
      preferredSports: preferredSports,
    });
  };

  useEffect(() => {
    // Save the information
    setSavedInfo({
      weight: weight,
      height: height,
      basalMetabolism: basalMetabolism,
      desiredWeight: desiredWeight,
      preferredSports: preferredSports,
    });
  }, [basalMetabolism]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Weight:</Text>
        <TextInput
          style={styles.input}
          placeholder="kg"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Height:</Text>
        <TextInput
          style={styles.input}
          placeholder="cm"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Desired Weight:</Text>
        <TextInput
          style={styles.input}
          placeholder="kg"
          keyboardType="numeric"
          value={desiredWeight}
          onChangeText={setDesiredWeight}
        />
      </View>

   

      <View style={styles.row}>
        <Text style={styles.label}>Preferred Sports:</Text>
        <View style={styles.sportsContainer}>
          <TouchableOpacity
            style={[styles.sportButton, preferredSports.includes('pool') && styles.selectedSport]}
            onPress={() => handleSportSelection('pool')}>
            <Text>Pool</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sportButton, preferredSports.includes('gym') && styles.selectedSport]}
            onPress={() => handleSportSelection('gym')}>
            <Text>Gym</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sportButton,
              preferredSports.includes('basketball') && styles.selectedSport,
            ]}
            onPress={() => handleSportSelection('basketball')}>
            <Text>Basketball</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button title="Save" onPress={handleSave} />

      {savedInfo && (
        <View style={styles.savedInfoContainer}>
          <Text style={styles.savedInfoLabel}>Saved Information:</Text>
          <View style={styles.card}>
            <Text>Kilo: {savedInfo.weight}</Text>
            <Text>Boy: {savedInfo.height}</Text>
            <Text>Basal Metabolism: {savedInfo.basalMetabolism}</Text>
            <Text>Desired Weight: {savedInfo.desiredWeight}</Text>
            <Text>Preferred Sports: {savedInfo.preferredSports.join(', ')}</Text>
          </View>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 16,
    marginLeft: 8,
  },
  sportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  sportButton: {
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  selectedSport: {
    backgroundColor: 'lightblue',
  },
  savedInfoContainer: {
    marginTop: 20,
  },
  savedInfoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
  },
});

export default PersonalInfoScreen;
