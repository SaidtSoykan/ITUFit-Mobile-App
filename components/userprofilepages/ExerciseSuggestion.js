// exerciseSuggestion.js

import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const ExerciseSuggestion = () => {
  //const [exerciseData, setExerciseData] = useState([]);
  const exerciseData = [
    { id: 1, name: 'Koşu', date: '2024-01-02', time: '08:00' },
    { id: 2, name: 'Yüzme', date: '2024-01-03', time: '17:30' },
    { id: 3, name: 'Ağırlık Antrenmanı', date: '2024-01-04', time: '10:00' },
  ];

   
  /*useEffect(() => {
    // Fetch data from the backend
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/exerciseData');
      if (response.ok) {
        const data = await response.json();
        setExerciseData(data);
      } else {
        console.error('Failed to fetch exercise data');
      }
    } catch (error) {
      console.error('Error while fetching exercise data:', error);
    }
  };*/
  
  return (
    <View>
      <FlatList
        data={exerciseData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={{ backgroundColor: 'white', borderWidth: 2, borderColor: 'blue', borderRadius: 10 }}>
            <Card.Title style={{ color: 'black', fontSize: 18 }}>{item.name}</Card.Title>
            <Card.Divider />
            <ListItem>
              <ListItem.Content>
                <ListItem.Subtitle>Tarih: {item.date}</ListItem.Subtitle>
                <ListItem.Subtitle>Saat: {item.time}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
        )}
      />
    </View>
  );
};

export default ExerciseSuggestion;
