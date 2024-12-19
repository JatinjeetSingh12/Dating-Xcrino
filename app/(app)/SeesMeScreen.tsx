import React from 'react'
import { Colors } from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Box, Pressable, HStack } from "@gluestack-ui/themed";
import FastImage from "react-native-fast-image";
import { FlatList } from 'react-native';
import { chatsList } from './(tabs)/MessagesScreen';
import { router } from 'expo-router';



const Page = () => {
    SafeAreaView
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1,backgroundColor:Colors.background}}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={chatsList.slice(0,4)}
        renderItem={({ item }) => (
          <Pressable
            $active-backgroundColor="$secondary200"
            onPress={()=>{router.navigate({pathname:'/UserDetailsScreen',params:{image:item.userProfileImg,showLike:"no"}})}}
            w={"$full"}
            p={10}
            alignSelf="center"
            my={2}
            flexDirection="row"
          >
            <HStack gap={10} alignItems="center" flex={1}>
              <Box w={50} h={50}>
                <FastImage
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                  }}
                  source={{ uri: item.userProfileImg }}
                />
              </Box>
              <Box flex={1}>
                <HStack
                  alignItems="center"
                  flex={1}
                  justifyContent="space-between"
                >
                  <Text fontSize={"$md"} bold>
                    {item.userName}
                  </Text>
                  {/* <Text fontSize={"$xs"}>{item.time}</Text> */}
                </HStack>
                <Text
                  fontSize={"$sm"}
                  numberOfLines={1}
                  color={"$secondary300"}
                >
                  Visited your profile 3 day ago
                </Text>
              </Box>
            </HStack>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default Page