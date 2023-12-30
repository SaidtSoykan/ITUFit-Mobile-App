// Comments.js

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Comments = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(0);

  const facilities = [
    { id: '1', name: 'Futbol Sahası' },
    { id: '2', name: 'Basketbol Sahası' },
    // ... diğer tesisler
  ];

  const handleFacilitySelection = (facility) => {
    setSelectedFacility(facility);
    // Belirli bir tesis seçildiğinde, o tesise ait yorumları getirebilirsiniz.
    // Örnek: fetchCommentsForFacility(facility.id);
  };

  const handleAddComment = () => {
    // Yeni yorumu eklemek için
    if (selectedFacility && newComment.trim() !== '') {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          text: newComment,
          user: 'John Doe',
          rating: userRating,
        },
      ]);
      setNewComment('');
      setUserRating(0);

      // Yeni yorumu sunucuya göndermek için bir fonksiyonu çağırabilirsiniz.
      // Örnek: sendCommentToServer(selectedFacility.id, newComment);
    }
  };

  const renderStar = (index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => setUserRating(index + 1)}
        style={[styles.star, index < userRating ? styles.filledStar : null]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facilities</Text>

      {!selectedFacility ? (
        <FlatList
          data={facilities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.facilityButton}
              onPress={() => handleFacilitySelection(item)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.commentsContainer}>
          <Text>{selectedFacility.name} için Yorumlar:</Text>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentItem}>
                <Text style={styles.commentUser}>{item.user}</Text>
                <Text>{item.text}</Text>
                <View style={styles.commentRating}>
                  <View style={styles.starsContainer}>
                    {[0, 1, 2, 3, 4].map((index) => (
                      <View
                        key={index}
                        style={[
                          styles.star,
                          index < item.rating ? styles.filledStar : null,
                        ]}
                      />
                    ))}
                  </View>
                  <Text style={styles.commentRatingText}>({item.rating}/5)</Text>
                </View>
              </View>
            )}
          />

          <View style={styles.ratingContainer}>
            <Text>Değerlendir:</Text>
            <View style={styles.starsContainer}>
              {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Yorumunuzu buraya ekleyin"
            onChangeText={(text) => setNewComment(text)}
            value={newComment}
          />
          <Button title="Yorum Ekle" onPress={handleAddComment} />
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  facilityButton: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
  },
  commentsContainer: {
    marginTop: 16,
  },
  commentItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  commentUser: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ffd700', // Yorum atan kişinin adının arka planı sarı renkli
    padding: 8,
    marginBottom: 8,
  },
  commentRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  commentRatingText: {
    marginLeft: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  star: {
    width: 20,
    height: 20,
    margin: 2,
    borderWidth: 1,
    borderColor: 'gray',
  },
  filledStar: {
    backgroundColor: '#f8d64e',
  },
});

export default Comments;
