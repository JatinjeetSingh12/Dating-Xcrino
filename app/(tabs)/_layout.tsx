import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { router, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native"; // Corrected import

export default function TabLayout() {

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="hsla(0, 0%, 100%, 1)"
      />

      <Tabs screenOptions={{ tabBarActiveTintColor: "#EF4765" }}>
        <Tabs.Screen
          name="HomeScreen"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={28} color={color} />
            ),
            headerShadowVisible:false,
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log("Menu")}>
                <MaterialCommunityIcons
                  name="filter-variant"
                  size={32}
                  color="black"
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => router.navigate("/(app)/Notification")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="ChatScreen"
          options={{
            title: "Chat",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble-outline" size={28} color={color} />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("Menu")}>
                <MaterialCommunityIcons
                  name="drag-horizontal-variant"
                  size={24}
                  color="black"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.navigate("/(tabs)/HomeScreen")}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="FavouriteScreen"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <Feather name="heart" size={28} color={color} />
            ),
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.navigate("/(tabs)/HomeScreen")}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("Menu")}>
                <MaterialCommunityIcons
                  name="drag-horizontal-variant"
                  size={24}
                  color="black"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="NewProfile"
          options={{
            title:"Profile",
            headerTitle:"Jennifer Gallery",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
            headerShadowVisible:false,
            headerTitleAlign: "center", // Center the title
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.navigate("/(tabs)/HomeScreen")}
              >
                <MaterialCommunityIcons
                  name="chevron-left" // Back icon for navigation to Home
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
