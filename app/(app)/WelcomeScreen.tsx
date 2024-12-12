import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleNextScreen = () => {
    router.navigate('/(tabs)/HomeScreen'); 
  };

  return (
    <ImageBackground
      source={require('../assets/images/profile-image.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Your content here */}
        <Text style={styles.text}>Profile Screen</Text>
        {/* Navigation Button */}
        <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
          <Text style={styles.buttonText}>Go to Next Screen</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20, // Add some margin to separate the text from the button
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%', // Makes the button full width
    position: 'absolute',
    bottom: 20, // Position the button at the bottom
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
