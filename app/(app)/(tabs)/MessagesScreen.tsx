import { Colors } from "@/constants/Colors";
import { View, Text, Box, Pressable, HStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import FastImage from "react-native-fast-image";

export const chatsList = [
  {
    id: 1,
    userProfileImg:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    userName: "Bob",
    time: "yesterday",
    latestMessage: "?",
  },
  {
    id: 3,
    userProfileImg:
      "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    userName: "Charlie",
    time: "1 day ago",
    latestMessage: "Thanks!",
  },
  {
    id: 5,
    userProfileImg:
      "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png",
    userName: "Eve",
    time: "5 minutes ago",
    latestMessage: "What's up?",
  },

  {
    id: 7,
    userProfileImg:
      "https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg",
    userName: "Grace",
    time: "1 hour ago",
    latestMessage: "I'll be there.",
  },
  {
    id: 9,
    userProfileImg:
      "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
    userName: "Ivan",
    time: "1 week ago",
    latestMessage: "See you tomorrow.",
  },
  {
    id: 10,
    userProfileImg:
      "https://pixlr.com/images/index/ai-image-generator-two.webp",
    userName: "Judy",
    time: "2 weeks ago",
    latestMessage: "Okay.",
  },
  {
    id: 11,
    userProfileImg:
      "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg",
    userName: "Mallory",
    time: "30 minutes ago",
    latestMessage: "No problem.",
  },
  {
    id: 12,
    userProfileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qzlZkS-5bMgAtjk_klsAEQBZtDiZ-ULGUA&s",
    userName: "Niaj",
    time: "15 minutes ago",
    latestMessage: "See you soon.",
  },

  {
    id: 13,
    userProfileImg:
      "https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
    userName: "Yvonne",
    time: "4 days ago",
    latestMessage: "See you soon.",
  },
];

const Page = () => {
  return (
    <View flex={1} backgroundColor={Colors.background}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chatsList}
        renderItem={({ item }) => (
          <Pressable
          onPress={()=>router.navigate('/ChatScreen')}
            $active-backgroundColor="$secondary200"
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
                  <Text fontSize={"$xs"}>{item.time}</Text>
                </HStack>
                <Text
                  fontSize={"$sm"}
                  numberOfLines={1}
                  color={"$secondary300"}
                >
                  {item.latestMessage}
                </Text>
              </Box>
            </HStack>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Page;
