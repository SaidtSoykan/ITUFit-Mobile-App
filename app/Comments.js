// Comments.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const Comments = () => {
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const facilities = [
    { id: '1', name: 'Facility 1' },
    { id: '2', name: 'Facility 2' },
    // ... diğer tesisler
  ];

  const handleFacilitySelection = (facilityId) => {
    setSelectedFacilityId(facilityId);
    // Belirli bir tesis seçildiğinde, o tesise ait yorumları getirebilirsiniz.
    // Örnek: fetchCommentsForFacility(facilityId);
  };

  const handleAddComment = () => {
    // Yeni yorumu eklemek için
    if (selectedFacilityId && newComment.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment('');

      // Yeni yorumu sunucuya göndermek için bir fonksiyonu çağırabilirsiniz.
      // Örnek: sendCommentToServer(selectedFacilityId, newComment);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yorumlar</Text>

      <View style={styles.facilityList}>
        <Text>Facility'yi Seç:</Text>
        <FlatList
          data={facilities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => handleFacilitySelection(item.id)}
              disabled={selectedFacilityId === item.id}
            />
          )}
          horizontal
        />
      </View>

      {selectedFacilityId ? (
        <View style={styles.commentsContainer}>
          <Text>Yorumlar:</Text>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />

          <TextInput
            style={styles.input}
            placeholder="Yorumunuzu buraya ekleyin"
            onChangeText={(text) => setNewComment(text)}
            value={newComment}
          />
          <Button title="Yorum Ekle" onPress={handleAddComment} />
        </View>
      ) : (
        <Text>Lütfen bir tesis seçin.</Text>
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
  facilityList: {
    marginBottom: 16,
  },
  commentsContainer: {
    marginTop: 16,
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

export default Comments;
