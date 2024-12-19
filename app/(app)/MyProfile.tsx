import { Colors } from "@/constants/Colors";
import { APP_NAME } from "@/constants/config";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  Box,
  ScrollView,
  HStack,
  Divider,
  Pressable,
} from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";

type SearchParams = {
  image: string[];
  showLike: boolean;
};

const Page = () => {
  const { height, width } = Dimensions.get("window");

  const [imagePosition, setImagePosition] = useState(0);

  const imageArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
  ];

  return (
    <SafeAreaView
      style={{
        position: "relative",
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        <Box
          style={{
            alignSelf: "center",
            width: width,
            height: height * 0.56,
            backgroundColor: "black",
            position: "relative",
          }}
        >
          <FastImage
            resizeMode="cover"
            source={{
              uri: String(imageArray[imagePosition]),
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Box
            position="absolute"
            flexDirection="row"
            top={0}
            right={0}
            left={0}
            bottom={0}
            flex={1}
          >
            <Pressable
              onPress={() => {
                if (imagePosition !== 0) {
                  setImagePosition((prev) => prev - 1);
                }
              }}
              flex={1}
            ></Pressable>
            <Pressable
              flex={1}
              onPress={() => {
                if (imageArray.length - 1 > imagePosition) {
                  setImagePosition((prev) => prev + 1);
                }
              }}
            ></Pressable>
          </Box>

          {imageArray.length > 1 && (
            <Box
              w={"95%"}
              h={4}
              flexDirection="row"
              flex={1}
              position="absolute"
              top={10}
              alignSelf="center"
            >
              {imageArray.map((item, index) => (
                <Box
                  mx={1.5}
                  flex={1}
                  rounded={"$md"}
                  key={index}
                  backgroundColor={
                    index === imagePosition ? "$white" : "rgba(0,0,0,0.2)"
                  }
                ></Box>
              ))}
            </Box>
          )}
        </Box>
        <Box gap={14} width={"90%"} alignSelf="center">
          <Text fontSize={28} color="$black" mt={10} fontFamily="Bold">
            William Forde
            <Text fontSize={28} color="$black" mt={10} fontFamily="Medium">
              22
            </Text>
          </Text>
          </Box>
          <Box mt={20} gap={14} width={"90%"} alignSelf="center">

          <HStack alignItems="center">
          <Box flex={0.8}>
          <FontAwesome name="heartbeat" size={16} color={Colors.primary} />
            </Box>
            <Box flex={2.2}>
              <Text color="$black" fontSize={14} fontFamily="SemiBold">
                {`21 people like you :)`}
              </Text>
            </Box>
            <Box flex={2} alignItems="flex-end">
              <TouchableOpacity onPress={()=>router.navigate('/LikesMeScreen')}>

              <Text color={Colors.primary} fontSize={14} fontFamily="SemiBold">
                WHO LIKES ME?
              </Text>
              </TouchableOpacity>
            </Box>
          </HStack>
          <Box alignItems="center">
            <Text   color={'$secondary400'} fontSize={10}  right={10} fontFamily="Medium">
            Swipe right more often to get more like
            </Text>
          </Box>
        </Box>
                  <Divider mt={15} mb={5} />


        <Box gap={14} width={"90%"} alignSelf="center">

          <Text color={Colors.primary} fontSize={20} mt={10} fontFamily="Bold">
            Personal Information
          </Text>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                Star Sign
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                Libra
              </Text>
            </Box>
          </HStack>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                About Me
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                A date that's it
              </Text>
            </Box>
          </HStack>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                Education
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                Bachelors
              </Text>
            </Box>
          </HStack>
        </Box>
        <Divider mt={35} mb={5} />
        <Box gap={10} width={"90%"} alignSelf="center">
          <Text color={Colors.primary} fontSize={20} mt={10} fontFamily="Bold">
            Interests
          </Text>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                Sports
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                Football
              </Text>
            </Box>
          </HStack>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                Music
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                Hip Hop
              </Text>
            </Box>
          </HStack>
          <HStack w={"$full"} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontFamily="Bold">
                Travel
              </Text>
            </Box>
            <Box flex={2}>
              <Text color="$secondary400" fontFamily="Bold">
                India,America
              </Text>
            </Box>
          </HStack>
        </Box>
        <Divider mt={35} mb={5} />

        <Box gap={10} width={"90%"} alignSelf="center">
          <Text color={Colors.primary} fontSize={20} mt={10} fontFamily="Bold">
            My Account
          </Text>
          <HStack w={"$full"} gap={10} alignItems="center">
            <Box flex={1}>
              <Text color="$secondary400" fontSize={15} fontFamily="Bold">
                {APP_NAME} ID
              </Text>
            </Box>
            <Box flex={2}>
              <Text underline color="$secondary400" fontFamily="Bold">
                77880011
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box h={200} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
