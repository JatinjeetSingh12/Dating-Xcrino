import React, { FC } from "react";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { Pressable, View, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Dimensions, Platform } from "react-native";

type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  bottom: number;
};

const TabsContentContainer: FC<Props> = ({ bottom, descriptors, state }) => {
  const { width } = Dimensions.get("window");

  return (
    <View
      flexDirection="row"
      pb={bottom+5}
      style={{
        ...Platform.select({
          android: {
            elevation: 10,
          },
          ios: {
            shadowColor: "silver",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
          },
        }),
        backgroundColor: Colors.background,
        paddingTop: 16,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { tabBarIcon, tabBarLabel } = descriptors[route.key]?.options;

        const isFocused = state.index === index;

        return (
          <Pressable
         
            onPress={() => {
              router.navigate(route.name);
            }}
            key={route.key}
            alignItems="center"
            gap={5}
            pb={Platform.OS === "ios" ? 0 : 20}
            w={width / 3}
          >
            {tabBarIcon &&
              tabBarIcon({
                focused: isFocused,
              })}
            <Text
              fontFamily="SemiBold"
              fontSize={12}
              color={isFocused ? Colors.primary : "silver"}
            >
              {tabBarLabel}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabsContentContainer;
