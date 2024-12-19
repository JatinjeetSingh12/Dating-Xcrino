import React from "react";
import { Slot } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import InterestsContextProvider from "@/context/InterestsContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

const appLayout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <GluestackUIProvider config={config}>
        <InterestsContextProvider>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <Slot />
        </InterestsContextProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
};

export default appLayout;
