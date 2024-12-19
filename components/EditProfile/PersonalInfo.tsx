import { Colors } from "@/constants/Colors";
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Text,
  Box,
  HStack,
  Pressable,
  Divider,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";

const PersonalInfo = () => {
  return (
    <Box width={"100%"} alignSelf="center">
      <Pressable
        px={20}
        pt={22}
        pb={30}
        $active-backgroundColor="$secondary200"
        onPress={() => {
          router.navigate("/PersonalInformationScreen");
        }}
        flexDirection="row"
        gap={5}
        alignItems="center"
      >
        <Text fontSize={24} color="$black" fontFamily="Bold">
          William Forde
        </Text>
        <Text fontSize={24} color="$black" fontFamily="SemiBold">
          22
        </Text>
      </Pressable>
      <Box gap={15} mt={5}>
        <Text px={20} fontFamily="Medium" fontSize={14} color={Colors.primary}>
          About Me
        </Text>
        <Pressable
          px={20}
          $active-backgroundColor="$secondary200"
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <Feather name="edit" size={18} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              Describe yourself here
            </Text>
          </HStack>
        </Pressable>
      </Box>
      <Divider mt={13} w={"95%"} alignSelf="center" />
      <Box gap={5} mt={18}>
        <Text px={20} fontFamily="Medium" fontSize={14} color={Colors.primary}>
          Personal Info
        </Text>
        <Pressable
          onPress={() => {
            router.navigate("/Industry");
          }}
          px={20}
          $active-backgroundColor="$secondary200"
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <Ionicons name="bag-outline" size={24} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What industry are you in?
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px={20}
          onPress={() => {
            router.navigate("/JobTitle");
          }}
          $active-backgroundColor="$secondary200"
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <Ionicons name="bag-outline" size={24} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What is your job title?
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px={20}
          $active-backgroundColor="$secondary200"
          onPress={() => {
            router.navigate("/Company");
          }}
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <FontAwesome6 name="credit-card" size={20} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What company do you work for?
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px={20}
          $active-backgroundColor="$secondary200"
          onPress={() => {
            router.navigate("/Education");
          }}
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <MaterialCommunityIcons
            name="lightbulb-variant-outline"
            size={28}
            color="silver"
          />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              Education Level
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px={20}
          $active-backgroundColor="$secondary200"
          onPress={() => {
            router.navigate("/School");
          }}
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <FontAwesome6 name="credit-card" size={20} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              Add your school
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          px={20}
          $active-backgroundColor="$secondary200"
          onPress={() => {
            router.navigate("/Hangout");
          }}
          py={20}
          gap={20}
          alignItems="center"
          flexDirection="row"
        >
          <SimpleLineIcons name="location-pin" size={22} color="silver" />
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={Colors.primary} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What places do you usually go to?
            </Text>
          </HStack>
        </Pressable>
      </Box>
      <Divider mt={13} w={"95%"} alignSelf="center" />
    </Box>
  );
};

export default PersonalInfo;
