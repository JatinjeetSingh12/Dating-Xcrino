import { Colors } from '@/constants/Colors'
import { View, Text, Box } from '@gluestack-ui/themed'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

const data = [
    {
        id:1,
        name:"Student",
    },
    {
        id:2,
        name:"Entertainment",
    },
    {
        id:3,
        name:"Finance & Economics",
    },
    {
        id:4,
        name:"Healthcare & medicine",
    },
    {
        id:5,
        name:"IT & Internet",
    },
    {
        id:6,
        name:"Media",
    },
    {
        id:7,
        name:"Retail",
    },
    {
        id:8,
        name:"Science & technology",
    },
    {
        id:9,
        name:"other",
    },
]


const Page = () => {
  return (
    <View flex={1} backgroundColor={Colors.background}>
        <FlatList
        style={{marginTop:20}}
        keyExtractor={({id})=>id.toString()}
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity style={{marginVertical:15,paddingHorizontal:35}} onPress={()=>{router.navigate('/EditInfo')}}>
                <Text fontFamily='Medium'>{item.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default Page