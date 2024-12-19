import React from "react";
import { Box, Text, HStack } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Keyboard } from "react-native";

const ChatScreenHeader = () => {
  const { top } = useSafeAreaInsets();

  const router = useRouter()

  return (
    <Box
      // borderBottomLeftRadius={40}
      justifyContent="center"
      // borderBottomRightRadius={40}
      pt={top}
      bg="$white"
    >
      <Box
        alignItems="center"
        px={10}
        mb={25}
        flexDirection="row"
        justifyContent="space-between"
      >
       
        <HStack gap={20}> 
        </HStack>
      </Box>
    </Box>
  );
};

export default ChatScreenHeader;
