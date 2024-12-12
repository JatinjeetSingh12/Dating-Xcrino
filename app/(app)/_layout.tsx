import React from "react";
import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="LoginSceen" />
      <Stack.Screen name="NewProfileScreen" />
      <Stack.Screen name="WelcomeScreen" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;