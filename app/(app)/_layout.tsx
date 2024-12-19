import { Stack } from "expo-router";

 // Ensure this is the correct name of your screen file

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="OtpScreen" />
      <Stack.Screen name="NewProfileScreen" />
      <Stack.Screen name="WelcomeScreen" />
      <Stack.Screen name="MatchScreen" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="ChatMessage" options={{ headerShown: false }} />
      <Stack.Screen name="CallScreen" options={{ headerShown: false }} />
      <Stack.Screen name="Matches" options={{ headerShown: false }} />
     
      
    
    </Stack>
  );
}
