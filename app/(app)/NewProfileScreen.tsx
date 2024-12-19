import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const NewProfileScreen = () => {
  const [name, setName] = useState('Brian Immanuel');
  const [birthday, setBirthday] = useState('05/MM/YYYY');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('Jakarta, Indonesia');
  const [job, setJob] = useState('Graphic Designer');
  const [companyName, setCompanyName] = useState('Design Center');
  const [collegeName, setCollegeName] = useState('Design School Int');
  const [description, setDescription] = useState('HI HGHRFD');

  const router = useRouter();

  const handleSubmit = () => {
    router.navigate('/WelcomeScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={require('../../assets/images/Add-image.png')} 
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#aaa"
            />
            <Ionicons name="person-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>Birthday</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
              placeholder="Birthday"
              placeholderTextColor="#aaa"
            />
            <Ionicons name="calendar-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Male' && { borderColor: '#EF4765' },
              ]}
              onPress={() => setGender('Male')}
            >
              <Text style={[styles.genderText, { color: gender === 'Male' ? '#EF4765' : 'gray' }]}>
                Male
              </Text>
              <Ionicons
                name="male-outline"
                size={24}
                color={gender === 'Male' ? '#EF4765' : 'gray'}
                style={styles.genderIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Female' && { borderColor: '#EF4765' },
              ]}
              onPress={() => setGender('Female')}
            >
              <Text style={[styles.genderText, { color: gender === 'Female' ? '#EF4765' : 'gray' }]}>
                Female
              </Text>
              <Ionicons
                name="female-outline"
                size={24}
                color={gender === 'Female' ? '#EF4765' : 'gray'}
                style={styles.genderIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Location</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Location"
              placeholderTextColor="#aaa"
            />
            <Ionicons name="location-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>Job</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={job}
              onChangeText={setJob}
              placeholder="Job"
              placeholderTextColor="#aaa"
            />
            <Ionicons name="briefcase-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>Company Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Company Name"
              placeholderTextColor="#aaa"
            />
           <MaterialCommunityIcons name="bank-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>College Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={collegeName}
              onChangeText={setCollegeName}
              placeholder="College Name"
              placeholderTextColor="#aaa"
            />
            <Ionicons name="school-outline" size={24} color="gray" />
          </View>
          <Text style={styles.label}>Description</Text>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Description"
              placeholderTextColor="#aaa"
              multiline
            />
            <Ionicons name="document-text-outline" size={24} color="gray" />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // styles remain unchanged
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  background: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    top: 200,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  textAreaContainer: {
    height: 80,
  },
  textArea: {
    textAlignVertical: 'top',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 5,
  },
  genderText: {
    top: 10,
  },
  genderIcon: {
    marginRight: 73,
    bottom: 10,
  },
  submitButton: {
    backgroundColor: '#EF4765',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewProfileScreen;
