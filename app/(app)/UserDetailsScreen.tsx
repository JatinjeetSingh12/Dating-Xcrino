import { Colors } from "@/constants/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  Box,
  ScrollView,
  HStack,
  Divider,
  Pressable,
} from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import FastImage from "react-native-fast-image";

type SearchParams = {
  image: string[];
  showLike: boolean;
};

const Page = () => {
  const { image, showLike } = useLocalSearchParams();

  const { height, width } = Dimensions.get("window");

  const [imagePosition, setImagePosition] = useState(0);

  const imageArray = String(image).split(",");

  return (
    <View position="relative" flex={1} backgroundColor={Colors.background}>
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        <Box
          style={{
            alignSelf: "center",
            width: width * 0.97,
            height: height * 0.72,
            borderRadius: 10,
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
              borderRadius: 10,
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
            onPress={()=>{
              if (imagePosition!==0) {
                setImagePosition((prev) => prev - 1);
              }
            }}
            flex={1}></Pressable>
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
        <Box gap={14} width={"95%"} alignSelf="center">
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
        <Box gap={10} width={"95%"} alignSelf="center">
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
        <Box gap={8} mb={100} mt={30}>
          <Pressable
            alignItems="center"
            justifyContent="center"
            py={12}
            w={"$full"}
            rounded={"$2xl"}
            backgroundColor="$blueGray200"
          >
            <Text fontSize={16} color="$black" fontFamily="Bold">
              Share Lena's Profile
            </Text>
          </Pressable>
          <Pressable
            alignItems="center"
            justifyContent="center"
            py={12}
            w={"$full"}
            rounded={"$2xl"}
            backgroundColor="$blueGray200"
          >
            <Text fontSize={16} color="$black" fontFamily="Bold">
              Block Lena
            </Text>
          </Pressable>
          <Pressable
            alignItems="center"
            justifyContent="center"
            py={12}
            w={"$full"}
            rounded={"$2xl"}
            backgroundColor="$blueGray200"
          >
            <Text fontSize={16} color="$red500" fontFamily="Bold">
              Report Lena
            </Text>
          </Pressable>
        </Box>
      </ScrollView>
      {showLike !== "no" && (
        <Box
          display={showLike === "no" ? "none" : "flex"}
          width={width * 0.97}
          alignSelf="center"
          h={height * 0.1}
          backgroundColor="transparent"
          flexDirection="row"
          position="absolute"
          alignItems="center"
          gap={20}
          justifyContent="center"
          bottom={0}
        >
          <Pressable
            backgroundColor={"$amber500"}
            $active-opacity={0.7}
            alignItems="center"
            justifyContent="center"
            w={100}
            height={50}
            rounded={"$full"}
          >
            <Entypo name="cross" size={35} color={"white"} />
          </Pressable>
          <Pressable
            backgroundColor="#DE3163"
            $active-opacity={0.7}
            alignItems="center"
            justifyContent="center"
            w={100}
            height={50}
            rounded={"$full"}
          >
            <AntDesign name="heart" size={25} color={"white"} />
          </Pressable>
        </Box>
      )}
    </View>
  );
};

export default Page;
