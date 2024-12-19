import React from "react";
import { Tabs } from "expo-router";
import TabsContentContainer from "@/components/tabs/TabsContentContainer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { APP_NAME } from "@/constants/config";
import {Text} from '@gluestack-ui/themed'

const _layout = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="SwipeCardScreen"
      tabBar={(props) => <TabsContentContainer {...props} bottom={bottom} />}
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tabs.Screen
        options={{
          tabBarIconStyle: { alignSelf: "center" },
          headerShown:true,
          tabBarLabel: APP_NAME,
          headerTitle:'',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible:false,
          headerLeft:()=><Text color={Colors.primary} fontFamily="Bold" fontSize={24} ml={10}>{APP_NAME}</Text>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="cards"
                size={30}
                color={Colors.primary}
              />
            ) : (
              <MaterialCommunityIcons name="cards" size={30} color="silver" />
            ),
        }}
        name="SwipeCardScreen"
      />
      <Tabs.Screen
        name="MessagesScreen"
        options={{
          headerShown:true,
          headerTitle:'',
          tabBarIconStyle: { alignSelf: "center" },
          tabBarLabel: "Messages",
          headerLeft:()=><Text color={Colors.primary} fontFamily="Bold" fontSize={24} ml={10}>Messages</Text>,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="message-processing"
                size={30}
                color={Colors.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-processing"
                size={30}
                color="silver"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          tabBarIconStyle: { alignSelf: "center" },
          tabBarLabel: "ME",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome
                name="user"
                size={30}
                color={Colors.primary}
              />
            ) : (
              <FontAwesome name="user" size={30} color="grey" />
            ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
