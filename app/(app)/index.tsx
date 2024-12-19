import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../assets/images/con-App.png')} style={styles.topText} />
        <Image source={require('../../assets/images/Logo.png')} style={styles.image} />
      </View>

      {/* Welcome Text */}
      <Text style={styles.headerText}>Welcome To</Text>
      <Text style={styles.headerTexts}>Xcrino</Text>
      <Text style={styles.tagline}>Match. Chat. Meet.</Text>

      {/* Buttons at the Bottom */}
      <View style={styles.buttonContainer}>
        <Link href="../LoginScreens" style={styles.button}>
          <Feather name="smartphone" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </Link>
        <Link href="/HomeScreen" style={styles.buttonOutline}>
          <Entypo name="facebook" size={24} color="#EF476F" style={styles.icon} />
          <Text style={styles.buttonOutlineText}>Continue with Facebook</Text>
        </Link>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="../LoginScreens" style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  topContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    bottom: 40,
    right: 90,
  },
  image: {
    width: 239.94,
    height: 248.13,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 14,
    color:'grey',
    textAlign: 'center',
  },
  headerTexts: {
    fontSize: 32,
    color:'#5D5D5D',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 12,
    color: '#FF9BAD',
    textAlign: 'center',
    marginBottom: 200,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom:90,
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: '#EF476F',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    flexDirection: 'row',
    top:30,
    alignItems:'center',
    fontFamily:'Poppins',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonOutline: {
    borderColor: 'hsla(0, 0%, 100%, 1)',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    top:25,
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily:'Poppins',
   
    
  },
  buttonOutlineText: {
    color: '#EF476F',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily:'Poppins',
  },
  icon: {
     marginRight: 30,
    padding:20,
   
    
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  footerText: {
    fontSize: 14,
    fontFamily:'Poppins',
    
  },
  footerLink: {
    marginTop: 5,
    bottom:4,
  },
  footerLinkText: {
    color: '#EF476F',
    fontWeight: 'bold',
    fontSize: 15,
    bottom:15,
    fontFamily:'Poppins',
  },
});

export default Index;


