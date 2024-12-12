import { Slot, Stack } from "expo-router";
import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import { StatusBar } from "react-native";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}
export default function Layout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Slot />
    
    </TamaguiProvider>
  );
}