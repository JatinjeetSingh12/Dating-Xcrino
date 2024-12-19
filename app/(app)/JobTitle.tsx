import { Colors } from '@/constants/Colors'
import { View, Text, Box } from '@gluestack-ui/themed'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

const data = [
    { id: 1, name: "Senior Executive" },
    { id: 2, name: "Founder" },
    { id: 3, name: "Investor" },
    { id: 4, name: "Professional Manager" },
    { id: 5, name: "Consultant" },
    { id: 6, name: "Marketing" },
    { id: 7, name: "Product" },
    { id: 8, name: "Sales" },
    { id: 9, name: "Business Development" },
    { id: 10, name: "Public Relations" },
    { id: 11, name: "Human Resources" },
    { id: 12, name: "Administration" },
    { id: 13, name: "Finance" },
    { id: 14, name: "Legal Personnel" },
    { id: 15, name: "Engineer" },
    { id: 16, name: "Designer" },
    { id: 17, name: "Entrepreneur" },
    { id: 18, name: "Artist" },
    { id: 19, name: "Freelancer" },
    { id: 20, name: "Photographer" },
    { id: 21, name: "Teacher" },
    { id: 22, name: "Student" },
    { id: 23, name: "Healthcare Professional" },
    { id: 24, name: "Writer" },
    { id: 25, name: "Musician" },
    { id: 26, name: "Chef" },
    { id: 27, name: "Athlete" },
    { id: 28, name: "Personal Trainer" },
    { id: 29, name: "Actor" },
    { id: 30, name: "Content Creator" },
    { id: 31, name: "Social Media Influencer" },
    { id: 32, name: "Researcher" },
    { id: 33, name: "Public Speaker" },
    { id: 34, name: "Fashion Designer" },
    { id: 35, name: "Travel Blogger" },
    { id: 36, name: "Gamer" },
    { id: 37, name: "Software Developer" },
    { id: 38, name: "Architect" },
    { id: 39, name: "Data Scientist" },
    { id: 40, name: "Consultant" }
];


const Page = () => {
  return (
    <View flex={1} backgroundColor={Colors.background}>
        <FlatList
        style={{marginTop:20}}
        keyExtractor={({id})=>id.toString()}
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity style={{marginVertical:15,paddingHorizontal:35}} onPress={()=>{router.back()}}>
                <Text fontFamily='Medium'>{item.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default Page