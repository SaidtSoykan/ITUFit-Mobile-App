// RankingPage.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RankingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Örnek kullanıcılar ve rankları
    const sampleUsers = [
      { id: '1', name: 'User 1', rank: 5 },
      { id: '2', name: 'User 2', rank: 3 },
      { id: '3', name: 'User 3', rank: 8 },
      // ... diğer kullanıcılar
    ];

    // Kullanıcıları ranklarına göre sırala
    const sortedUsers = sampleUsers.sort((a, b) => b.rank - a.rank);

    setUsers(sortedUsers);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sıralama</Text>
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.userItem}>
              <Text>{`${index + 1}. ${item.name}`}</Text>
              <Text>{`Rank: ${item.rank}`}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Kullanıcı bulunamadı.</Text>
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
  userItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
  },
});

export default RankingPage;
