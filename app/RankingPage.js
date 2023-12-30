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
            <View style={index % 2 === 0 ? styles.evenItem : styles.oddItem}>
              <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>{`${index + 1}. ${item.name}`}</Text>
                <Text style={styles.userRank}>{`  Rank: ${item.rank}`}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noUserText}>Kullanıcı bulunamadı.</Text>
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
    backgroundColor: '#f5f5f5', // Arka plan rengi
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#333', // Başlık rengi
  },
  evenItem: {
    borderWidth: 3, // Kalın kenar
    borderColor: 'red', // Kenar rengi
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9', // Çift sıradaki öğelerin arka plan rengi
  },
  oddItem: {
    borderWidth: 3, // Kalın kenar
    borderColor: 'red', // Kenar rengi
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff', // Tek sıradaki öğelerin arka plan rengi
  },
  userInfoContainer: {
    flexDirection: 'row', // Yatay düzen
    justifyContent: 'space-between', // İki öğeyi genişlikleri doğrultusunda eşit aralıklarla yerleştirme
    alignItems: 'center', // Dikeyde hizalama
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Kullanıcı adı rengi
  },
  userRank: {
    fontSize: 16,
    color: '#666', // Rank rengi
  },
  noUserText: {
    fontSize: 16,
    color: '#666', // Bulunamayan kullanıcı metni rengi
  },
});

export default RankingPage;
