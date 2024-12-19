import { Colors } from "@/constants/Colors";
import { CURRENCY } from "@/constants/config";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  View,
  Text,
  Box,
  ScrollView,
  HStack,
  VStack,
  Pressable,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Dimensions, FlatList } from "react-native";

const data = [
  {
    id: 1,
    title: "Who Likes Me?",
    subTitle: "See who liked you and match instantlu!",
    icon: () => <FontAwesome name="heartbeat" size={24} color="#FFD700" />,
  },
  {
    id: 2,
    title: "Who Sees Me",
    subTitle: "See who have viewed your profile at any time",
    icon: () => <AntDesign name="eye" size={26} color="#FFD700" />,
  },
  {
    id: 3,
    title: "Unlimited Likes",
    subTitle: "send your Likes to let the other side see you faster",
    icon: () => <MaterialIcons name="swipe-right" size={24} color="#FFD700" />,
  },
  {
    id: 4,
    title: "Free Boost",
    subTitle: "one free Boost every month",
    icon: () => (
      <MaterialIcons name="electric-bolt" size={24} color="#FFD700" />
    ),
  },
  {
    id: 5,
    title: "Upgrade Like",
    subTitle: "Upgrades your Likes to let the other side see you faster",
    icon: () => <FontAwesome name="star" size={24} color="#FFD700" />,
  },
  {
    id: 6,
    title: "PREMIUM Badge",
    subTitle: "PREMIUM Diamond Badge. Exclusive identify!",
    icon: () => (
      <MaterialCommunityIcons name="diamond" size={24} color="#FFD700" />
    ),
  },
];

const { width } = Dimensions.get("window");

const monthsPlan = [
  {
    id: 1,
    months: 1,
    amountPerMonth: "1,050/mo",
    totalAmount: "1,050",
  },
  {
    id: 2,
    months: 3,
    amountPerMonth: "750/mo",
    totalAmount: "2,250",
  },
  {
    id: 3,
    months: 12,
    amountPerMonth: "625/mo",
    totalAmount: "7,500",
  },
];

const Page = () => {
  const [activePack, setActivePack] = useState(2);

  const finalAmount = monthsPlan[activePack-1].totalAmount

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          mt={10}
          justifyContent="space-evenly"
          flexDirection="row"
          w={"$full"}
        >
          {monthsPlan
            .map((item, index) => (
              <Pressable
                onPress={() => setActivePack(item.id)}
                pt={20}
                key={item.id}
                alignItems="center"
                borderWidth={activePack === item.id ? 2.5 : 1.5}
                w={activePack === item.id ? width * 0.32 : width * 0.28}
                gap={2.5}
                borderColor={
                  activePack === item.id ? "#FFD700" : "$secondary200"
                }
                borderRadius={10}
              >
                <Text
                  fontFamily={activePack === item.id ? "SemiBold" : "Medium"}
                  color={activePack === item.id ? "$black" : "$secondary400"}
                  fontSize={27}
                >
                  {item.months}
                </Text>
                <Text fontFamily="Light" color="$secondary400" fontSize={12}>
                  months
                </Text>
                <Text fontFamily="SemiBold" color="$secondary400" fontSize={16}>
                  {CURRENCY} {item.amountPerMonth}
                </Text>
                <Box
                  mt={8}
                  py={5}
                  w={"$full"}
                  bgColor={
                    activePack === item.id ? "#FFD700" : 'transparent'
                  }
                  alignItems="center"
                >
                  <Text
                    fontFamily="SemiBold"
                    color={activePack === item.id ? "$black" : "$secondary400"}
                    fontSize={16}
                  >
                    {CURRENCY} {item.totalAmount}
                  </Text>
                </Box>
              </Pressable>
            ))
            .reverse()}
        </Box>
        <Box w={"96%"} alignSelf="center" mt={20}>
          <FlatList
            data={data}
            scrollEnabled={false}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <HStack gap={10} alignItems="center" my={15}>
                <Box
                  borderWidth={1}
                  borderColor="$secondary200"
                  rounded={"$md"}
                  p={8}
                >
                  {<item.icon />}
                </Box>
                <VStack gap={1}>
                  <Text color="$black" fontFamily="SemiBold">
                    {item.title}
                  </Text>
                  <Text fontSize={12} fontFamily="Regular">
                    {item.subTitle}
                  </Text>
                </VStack>
              </HStack>
            )}
          />
        </Box>
      </ScrollView>
      <Button m={20} h={48} rounded={'$xl'} backgroundColor="#FFD700">
        <ButtonText color="$black">
          {CURRENCY} {finalAmount}
        </ButtonText>
      </Button>
    </View>
  );
};

export default Page;
