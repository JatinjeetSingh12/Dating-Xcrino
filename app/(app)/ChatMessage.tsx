import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const ChatMessage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi Patricia, You look beautiful.', timestamp: '08:29 PM', type: 'sent' },
    { text: 'Thank you, you look good too.', timestamp: '08:30 PM', type: 'received' },
    { text: 'What kind of music do you like Patricia?', timestamp: '08:31 PM', type: 'sent' },
    { text: 'Almost all music genres I like, but what I like best is rock and roll music.', timestamp: '08:32 PM', type: 'received' },
    { text: 'I also really like rock and roll music. Next week are you busy? I want to take you to a music concert, how?', timestamp: '08:33 PM', type: 'sent' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { text: inputText, timestamp: new Date().toLocaleTimeString(), type: 'sent' };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeumGgeGsBd4hP9NROzz7pC8CeS30pCXr7g&s' }} style={styles.profileImage} />
        <View style={styles.headerText}>
          <Text style={styles.profileName}>Patricia</Text>
          <Text style={styles.onlineStatus}>Online</Text>
        </View>
        <TouchableOpacity style={styles.videoCallButton} onPress={() => router.navigate('/CallScreen')}>
          <Ionicons name="call-outline" size={30} color="#ACACAC" />
          <Ionicons name="videocam-outline" size={30} color="#ACACAC" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.messageContainer, message.type === 'sent' ? styles.sentMessage : styles.receivedMessage]}>
            <View style={message.type === 'sent' ? styles.messageBubblePink : styles.messageBubbleWhite}>
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a message"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  onlineStatus: {
    color: 'green',
  },
  videoCallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
  },
  messageBubblePink: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
  messageBubbleWhite: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#EF4765',
    padding: 10,
    borderRadius: 20,
  },
});

export default ChatMessage;
