import React from "react";
import { router, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import Logo from "@/assets/images/logo.svg";
import { Box, HStack, Pressable, Text } from "@gluestack-ui/themed";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { Image } from "react-native";

const rootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, headerBackVisible: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="ProfileUpdate"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => <></>,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => <Logo width={48} height={48} />,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AddPhotoScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => <></>,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => <Logo width={48} height={48} />,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Settings"
        options={{
          headerShown: true,
          headerShadowVisible: true,

          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Settings
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        options={{
          headerShown: true,
          headerShadowVisible: true,

          headerLeft: () => (
            <HStack alignItems="center" gap={15}>
              <Ionicons
                onPress={() => {
                  router.back();
                }}
                name="arrow-back"
                size={24}
                color="black"
              />
              <HStack alignItems="center" gap={8}>
                <Image
                  alt="profile-image"
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s",
                  }}
                />
                <Box>
                  <Text bold color="black">
                    Sebastian Rudiger
                  </Text>
                </Box>
              </HStack>
            </HStack>
          ),
          headerRight: () => (
            <Octicons
              onPress={() => {
                router.navigate("/ChatOptionsScreen");
              }}
              name="info"
              size={24}
              color="black"
            />
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="PersonalInformationScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Personal Information
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Account&Security"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Account & Security
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />

      <Stack.Screen
        name="EditInfo"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Edit info
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />

      <Stack.Screen
        name="Industry"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "Industry",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="JobTitle"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "Job Title",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Company"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "Company",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Education"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "Degree",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="School"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "School",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Hangout"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",
          headerLeft: () => (
            <Entypo
              onPress={() => {
                router.back();
              }}
              name="cross"
              size={30}
              color="black"
            />
          ),
          headerTitle: "Hangouts",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Sports"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Sports",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />

      <Stack.Screen
        name="Music"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Music",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="FavouriteFood"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Food",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="FavouriteMovie"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Movies",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Books"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Books",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="Travel"
        options={{
          headerShown: true,
          headerShadowVisible: true,
          presentation: "fullScreenModal",
          animation: "fade_from_bottom",

          headerTitle: "Travel",
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              onPress={() => router.back()}
              size={25}
              color="black"
            />
          ),
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="UserDetailsScreen"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Text fontFamily="Bold" fontSize={26} color="$black">
              Lena, 24
            </Text>
          ),
          headerTitle: "",
          headerRight: () => (
            <FontAwesome
              onPress={() => {
                router.back();
              }}
              name="arrow-circle-down"
              size={30}
              color={Colors.primary}
            />
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="LikesMeScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                People Liked Me(21)
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="SeesMeScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Who Sees Me
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="ILikeScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                I Like
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="SubscriptionScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
                Subscription
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="MatchChatModal"
        options={{
          animation: "fade_from_bottom",
          presentation: "fullScreenModal",
        }}
      />
     <Stack.Screen
        name="ChatOptionsScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <HStack alignItems="center" gap={10}>
              <Entypo
                onPress={() => {
                  router.back();
                }}
                name="chevron-left"
                size={30}
                color="black"
              />
              <Text color="$black" fontFamily="SemiBold" fontSize={21}>
              Sebastian Rudiger
              </Text>
            </HStack>
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
     <Stack.Screen
        name="MyProfile"
        options={{
          headerShown:false
        }}
      />
    </Stack>
  );
};

export default rootLayout;
