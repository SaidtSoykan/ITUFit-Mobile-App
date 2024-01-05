// exerciseSuggestion.js

import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const ExerciseSuggestion = () => {
  //const [exerciseData, setExerciseData] = useState([]);
  const exerciseData = [
    { id: 1, name: 'FOOTBALL', date: '2024-01-08', time: '12:00' },
    { id: 2, name: 'POOL', date: '2024-01-09', time: '14:00' },
    { id: 3, name: 'TABLE_TENNIS', date: '2024-01-10', time: '09:00' },
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
