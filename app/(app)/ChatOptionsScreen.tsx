import { View, Text, HStack, Box, Divider } from "@gluestack-ui/themed";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const data = [
    {
      id: 1,
      text: "Unmatch & Block",
      Icon: () => (
        <Entypo
          name="cross"
          style={{ marginLeft: 14 }}
          size={30}
          color={Colors.primary}
        />
      ),
    },
    {
      id: 2,
      text: "Clear Chat History",
      Icon: () => (
        <FontAwesome
          name="history"
          style={{ marginLeft: 18 }}
          size={24}
          color={Colors.primary}
        />
      ),
    },
    {
      id: 3,
      text: "Report this User",
      Icon: () => (
        <Entypo
          name="block"
          style={{ marginLeft: 18 }}
          size={22}
          color={Colors.primary}
        />
      ),
    },
  ];

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Box my={13}>
            <HStack mb={20} alignItems="center" gap={item.id === 1 ? 12 : 16}>
              <item.Icon />
              <Text color="$black" fontSize={18} fontFamily="Bold">
                {item.text}
              </Text>
            </HStack>
            <Divider />
          </Box>
        )}
      />
    </SafeAreaView>
  );
};

export default Page;
