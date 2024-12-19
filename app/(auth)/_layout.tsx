import React from "react";
import { useFonts } from "expo-font";
import { Redirect, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Logo from "@/assets/images/logo.svg";
import * as SecureStore from 'expo-secure-store';
import { AUTH } from "@/constants/config";


const _layout = () => {
  const [fontsLoaded] = useFonts({
    Regular: require("../../assets/fonts/OpenSans-Regular.ttf"),
    Light: require("../../assets/fonts/OpenSans-Light.ttf"),
    Medium: require("../../assets/fonts/OpenSans-Medium.ttf"),
    SemiBold: require("../../assets/fonts/OpenSans-SemiBold.ttf"),
    Bold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    ExtraBold: require("../../assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  const isSession =  SecureStore.getItem(AUTH)




  if (isSession) {
    return <Redirect href={'/(app)/(tabs)/SwipeCardScreen'} />
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false ,headerBackVisible:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="LoginwithPhone"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerBackVisible:false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.navigate("..")}
              name="chevron-back"
              size={30}
              color="black"
            />
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => <Logo width={48} height={48} />,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="PhoneVerify"
        options={{
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => (
            <Ionicons
              onPress={() => router.navigate("..")}
              name="chevron-back"
              size={30}
              color="black"
            />
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => <Logo width={48} height={48} />,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default _layout;
