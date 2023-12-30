// CreateProgram.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateProgram = () => {
  const [programName, setProgramName] = useState('');
  const [programDescription, setProgramDescription] = useState('');

  const handleCreateProgram = () => {
    // Burada program oluşturma işlemlerini gerçekleştirebilirsiniz
    console.log('Program Oluşturuluyor: ', programName, programDescription);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Program Oluştur</Text>
      <TextInput
        style={styles.input}
        placeholder="Program Adı"
        onChangeText={(text) => setProgramName(text)}
        value={programName}
      />
      <TextInput
        style={styles.input}
        placeholder="Program Açıklaması"
        onChangeText={(text) => setProgramDescription(text)}
        value={programDescription}
        multiline
      />
      <Button title="Program Oluştur" onPress={handleCreateProgram} />
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default CreateProgram;
