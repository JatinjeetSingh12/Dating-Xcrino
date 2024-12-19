import React from "react";
import { Entypo, FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import { HStack, VStack, Text, Box, Pressable } from "@gluestack-ui/themed";
import FastImage from "react-native-fast-image";
import { Dimensions } from "react-native";
import { APP_NAME } from "@/constants/config";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const ProfileHeader = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize={24} fontFamily="Bold" color="$black">
          ME
        </Text>
        <Fontisto name="player-settings" onPress={()=>{router.navigate('/Settings')}} size={24} color="grey" />
      </HStack>
      <HStack mt={10} gap={18}>
        <Pressable onPress={()=>router.navigate('/MyProfile')} position="relative" w={width * 0.20} height={height * 0.12}>
          <FastImage
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
            }}
          />
          <Pressable onPress={()=>{router.navigate('/EditInfo')}} position="absolute" bottom={5} right={5} p={5} rounded={'$full'} bg="$white">
          <Entypo name="edit" size={12} color={Colors.primary} />
          </Pressable>
        </Pressable>

        <VStack flex={1}>
          <Box gap={10} flex={1}>
            <Text fontFamily="Bold" fontSize={20} color="$black">
              William Forde
            </Text>
            <HStack alignItems="center" gap={5}>
              <Text fontSize={13} color="$secondary300" fontFamily="SemiBold">
                {APP_NAME} ID: 42231
              </Text>
              <Ionicons name="copy-outline" size={14} color="silver" />
            </HStack>
          </Box>
          {/* <Pressable
            maxWidth={"55%"}
            gap={10}
            alignItems="center"
            flexDirection="row"
            backgroundColor="$blueGray200"
            p={12}
            justifyContent="space-around"
            rounded={"$lg"}
          >
            <FontAwesome5 name="wallet" size={16} color="black" />
            <Text fontSize={12} color="$black">
              Balance : 0 Coins
            </Text>
          </Pressable> */}
        </VStack>
      </HStack>
    </>
  );
};

export default ProfileHeader;
