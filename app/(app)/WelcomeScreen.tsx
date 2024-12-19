import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleNextScreen = () => {
    router.push('../MatchScreen'); // Replace with your actual next screen path
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')} // Using asset image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.texts}>Hi</Text>
        <Text style={styles.text}>Brian Immanual</Text>

        {/* Profile Image */}
        <Image 
          source={require('../../assets/images/profile.png')} // Replace with your actual image path
          style={styles.profileImage} 
        />
<Text style={styles.descriptionTexts}>
          Let's find your
        </Text>
        <Text style={styles.descriptionText}>
          Blind Date now !
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    padding: 20,
  },
  texts: {
    fontSize: 14,
    color: 'grey',
     bottom: 170,
     paddingRight: 260, // Adjusted for spacing
  },
  text: {
    fontSize: 24,
    color: 'black',
  paddingRight: 110,
    bottom: 150, // Adjusted for spacing with the image
  },
  profileImage: {
    width: 120, // Width of the profile image
    height: 120, // Height of the profile image
    // Makes the image circular
    bottom: 140,
    right: 90, // Adds space between the image and text below
    // Optional: Border color
  },
  descriptionText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    top: 60, 
    right: 40,
    // Adds space before the button
  },
  descriptionTexts:{
fontSize:20,
top: 40, 
    right: 95,
    color: 'white',
  },
  button: {
    backgroundColor: '#EF4765',
    padding: 15,
    borderRadius: 70,
    alignItems: 'center',
    width: '100%', // Makes the button full width
    position: 'absolute',
    bottom: 50, // Position the button above the bottom
  },
  buttonText: {
    color: '#EF4765',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
    backgroundColor: '#fff',
    width:300,
  },
});

export default WelcomeScreen;
