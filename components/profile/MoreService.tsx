import { Colors } from "@/constants/Colors";
import { AntDesign, FontAwesome, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";

const data = [
  {
    id: 1,
    text: "See Who Likes Me",
    subText: "6 People Like Me.",
    Icon: () => (
      <FontAwesome name="heartbeat" size={24} color={Colors.primary} />
    ),
    onPress: () => router.navigate({pathname:"/LikesMeScreen",params:{showLike:"no"}}),
  },
  {
    id: 2,
    text: "Who Sees Me",
    subText: "See who have viewed your profile at any time.",
    Icon: () => <AntDesign name="eye" size={26} color={Colors.primary} />,
    onPress: () => router.navigate({pathname:"/SeesMeScreen",params:{showLike:"no"}}),
  },
  {
    id: 3,
    text: "I Like",
    subText: "",
    Icon: () => <Octicons name="feed-heart" size={24} color={Colors.primary} />,
    onPress: () => router.navigate({pathname:"/ILikeScreen",params:{showLike:"no"}}),
  },
  {
    id: 4,
    text: "Subscription",
    subText: "",
    Icon: () => <MaterialCommunityIcons name="diamond" size={22} color={Colors.primary} />,
    onPress: () => router.navigate({pathname:"/SubscriptionScreen"}),
  },
];

const MoreService = () => {
  return (
    <Box>
      <Text mb={20} color="$secondary400" fontFamily="SemiBold">
        More Services
      </Text>
      <Box bg="$white" w={"100%"} alignSelf="center" p={10} rounded={"$xl"}>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => (
            <Pressable
              flexDirection="row"
              onPress={item.onPress}
              gap={10}
              shadowColor={"#000"}
              shadowOffset={{ width: 1, height: 2 }}
              shadowOpacity={0.1}
              shadowRadius={10}
              elevation={5}
              alignItems="center"
              my={10}
            >
              <Box bg="#FBC9DB" rounded={"$xl"} p={8}>
                {<item.Icon />}
              </Box>
              <VStack justifyContent="center" gap={3} flex={1}>
                <Text color="$black" fontFamily="SemiBold">
                  {item.text}
                </Text>
                {item.subText && (
                  <Text color="$secondary300" fontSize={13}>
                    {item.subText}
                  </Text>
                )}
              </VStack>
              <AntDesign
                style={{ marginVertical: 6 }}
                name="right"
                size={16}
                color="black"
              />
            </Pressable>
          )}
        />
      </Box>
    </Box>
  );
};

export default MoreService;
