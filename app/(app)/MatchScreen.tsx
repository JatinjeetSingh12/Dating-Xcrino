import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const MatchScreen = () => {
  const router = useRouter();

  const handleChat = () => {
    router.push('/ChatMessage'); // Navigate to the next screen
  };

  const handleSkip = () => {
    router.push('/(tabs)/HomeScreen'); // Navigate to the tabs screen
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { color: '#EF4765', fontSize: 28 ,bottom:120 }]}>Cheers!</Text>
      <Text style={[styles.headerText, { color: '#5E5E5E', fontSize: 30 ,bottom:110 }]}>It's a match.</Text>

      <View style={styles.profilesContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' }}
          style={styles.profileImages}
        />
        <View> 
          <Image source={require('../../assets/images/Love.png')}style={styles.imageContainer}/>
          <Image source={require('../../assets/images/Love_Chat.png')} style={{left:50}}/>
        
        </View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiHk-7UxZ5Hv59qIY-Iwrx1G0qm4ZAAgpFA&s' }}
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity style={styles.chatButton} onPress={handleChat}>
        <Ionicons name="chatbubble-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profilesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    bottom: 50,
    left:30,
  },
  profileImages: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    top: 70,
    right:23,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    justifyContent:'space-between',
    right:60,
  },
  chatButton: {
    backgroundColor: '#EF4765',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 20,
    top: 150,
    
    
},
  skipText: {
    color: '#EF4765',
    fontSize: 16,
    top: 150,
  },
});

export default MatchScreen;
