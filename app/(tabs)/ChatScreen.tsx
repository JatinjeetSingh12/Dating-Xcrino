import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ChatScreen = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const newMatches = [
    { id: '1', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '2', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '3', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWtK8c4UpeY7MxOPT4JoIde8OfcUJl4eteg&s' } },
    { id: '4', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '5', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWtK8c4UpeY7MxOPT4JoIde8OfcUJl4eteg&s' } },
    { id: '6', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '7', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '8', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
  ];

  const [messages, setMessages] = useState([
    { id: '1', name: 'Patricia', message: 'Omg, that was so much fun. Let\'s go together again soon!', time: '08:33 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '2', name: 'Lyona', message: 'Hi Brian, how are you? Long time no see.', time: '08:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '3', name: 'Merry', message: 'We can go together, I\'ll wait at the bus stop.', time: '10:00 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    { id: '4', name: 'Gie', message: 'Have a nice day, don\'t be sad on a sunny day!', time: '10:30 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    {id: '5', name: 'Gie', message: 'Have a nice day, don\'t be sad on a sunny day!', time: '10:30 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    {id: '6', name: 'Gie', message: 'Have a nice day, don\'t be sad on a sunny day!', time: '10:30 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
    {id: '7', name: 'Gie', message: 'Have a nice day, don\'t be sad on a sunny day!', time: '10:30 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
   { id: '8', name: 'Gie', message: 'Have a nice day, don\'t be sad on a sunny day!', time: '10:30 PM', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' } },
  ]);

  const handleDelete = () => {
    if (selectedChat) {
      setMessages(messages.filter((message) => message.id !== selectedChat));
      setSelectedChat(null);
    } else {
      Alert.alert('No chat selected', 'Please select a chat to delete.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
       
        <TextInput
          style={styles.searchBar}
          placeholder="Search Messages"
        />
         <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate("/(app)/Matches")}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* New Matches */}
      <Text style={styles.newMatchesText}>New Matches</Text>
      <View style={styles.newMatches}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newMatches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.profileImage} />
          )}
        />
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.navigate('/ChatMessage')}>
            <View style={styles.messageRow}>
              <Image source={item.image} style={styles.profileImage} />
              <View style={styles.messageText}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  newMatchesText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  newMatches: {
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  messageText: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
  },
  time: {
    color: '#999',
  },
});

export default ChatScreen;
