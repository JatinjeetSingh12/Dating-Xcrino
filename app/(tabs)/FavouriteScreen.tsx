import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const profiles = [
  { name: 'Clara', age: 22, distance: '5 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Eveline', age: 19, distance: '6 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Melly', age: 20, distance: '8 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Renna', age: 23, distance: '10 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Layla', age: 24, distance: '9 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  { name: 'Windy', age: 21, distance: '20 Km', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5639YYnzxg2BPCvnWgOE0zgEoXV-UuLTAbg&s' } },
  // Add more profiles as needed
];

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search Match Request" />
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={profiles}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.profileContainer}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.overlayContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.profileName}>{item.name}, {item.age}</Text>
                <Text style={styles.profileDistance}>{item.distance}</Text>
              </View>
              <View  style={styles.buttonsContainer}>
                <TouchableOpacity style={{borderRadius:100 ,backgroundColor:'white' }} onPress={() => console.log('Rejected', item.name)}>
                  <Ionicons name="close" style={{borderRadius:100}} size={50} sty color="#ACACAC"   />
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',justifyContent:'center' ,backgroundColor:'#EF4765', padding:10,borderRadius:100 }}  onPress={() => console.log('Liked', item.name)}>
                  <AntDesign name="hearto"  size={30} color="white"  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    height:50,
  },
  profileContainer: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative', // Ensure position relative for absolute children
  },
  profileImage: {
    width: '100%',
    height: 300,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject, // Ensure overlay covers the entire image
    justifyContent: 'space-between',
  },
  textContainer: {
    // Semi-transparent background for better text visibility
    padding: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileDistance: {
    fontSize: 14,
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    gap:10,
     
     // Semi-transparent background for better button visibility
  },
});

export default FavouriteScreen;
