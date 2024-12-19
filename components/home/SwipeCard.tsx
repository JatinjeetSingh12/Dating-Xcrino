import React, { FC, useRef, useState } from "react";
import { Animated, Dimensions, PanResponder, Pressable,View,Text } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import FastImage from "react-native-fast-image";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { getLoadedFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

type Props = {
  isFirst: boolean;
  item: {
    id: number;
    image: string[];
    age: number;
    name: string;
    zodiac: string;
  };
  swipe: Animated.ValueXY;
  removeCard: () => void;
};

const SwipeCard: FC<Props> = ({ isFirst, item, swipe, removeCard }) => {

  

  const [imagePosition, setImagePosition] = useState(0);

  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const screenHeight = height - (headerHeight + tabBarHeight + height * 0.1);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx }) => Math.abs(dx) > 20,
      onPanResponderMove: (_, { dx, dy }) => {
        swipe.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (_, { dx, dy }) => {
        const actionThreshold = 20;
        const swipeDirection = dx > 0 ? "right" : "left";
        const isSwiped = Math.abs(dx) > actionThreshold;

        if (isSwiped) {
          Animated.timing(swipe, {
            toValue: { x: dx > 0 ? width * 3 : -width * 3, y: dy },
            duration: 400,
            useNativeDriver: true,
          }).start(removeCard);
        } else {
          Animated.spring(swipe, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            friction: 5,
          }).start();
        }
      },
    })
  ).current;

  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-8deg", "0deg", "8deg"],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 60],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const disLikeOpacity = swipe.x.interpolate({
    inputRange: [-60, -10],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      key={item.id}
      style={[
        {
          position: "absolute",
          height: screenHeight - 60,
          width: width * 0.97,
          alignSelf: "center",
          borderColor: "black",
          borderRadius: 10,
        },
        isFirst && {
          transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <FastImage
        resizeMode="cover"
        source={{
          uri: item.image[imagePosition],
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          backgroundColor: "black",
        }}
      />
      <Pressable
        style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <LinearGradient
          style={{ flex: 1, borderRadius: 1 }}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 1 }}
          colors={["transparent", "rgba(0,0,0,0.95)"]}
        >
          {isFirst && (
            <>
              <Animated.View
                style={{
                  backgroundColor: "white",
                  position: "absolute",
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  left: 20,
                  top: 20,
                  opacity: likeOpacity,
                }}
              >
                <AntDesign name="heart" size={30} color="#DE3163" />
              </Animated.View>
              <Animated.View
                style={{
                  backgroundColor: "white",
                  position: "absolute",
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  right: 20,
                  top: 20,
                  opacity: disLikeOpacity,
                }}
              >
                <Entypo name="cross" size={35} color="#FFBF00" />
              </Animated.View>
            </>
          )}

          {item.image.length > 1 && (
            <View
              style={{
                width: "95%",
                height: 4,
                flexDirection: "row",
                flex: 1,
                position: "absolute",
                top: 10,
                alignSelf: "center",
              }}
            >
              {item.image.map((item, index) => (
                <View
                  style={{
                    marginHorizontal: 1.5,
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor:
                      index === imagePosition ? "$white" : "rgba(0,0,0,0.2)",
                  }}
                  key={index}
                ></View>
              ))}
            </View>
          )}

          {/* <Box
            flexDirection="row"
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={130}
          >
            <TapGestureHandler
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.END) {
                  if (imagePosition !== 0) {
                    setImagePosition((prev) => prev - 1);
                  }
                }
              }}
            >
              <Box flex={1}></Box>
            </TapGestureHandler>
            <TapGestureHandler
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.END) {
                  if (item.image.length - 1 > imagePosition) {
                    setImagePosition((prev) => prev + 1);
                  }
                }
              }}
            >
              <Box flex={1}></Box>
            </TapGestureHandler>
          </Box> */}
          {/* <Box
            flexDirection="row"
            w={"$full"}
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            pl={16}
            bottom={20}
          >
            <TapGestureHandler
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.END) {
                  router.push({
                    pathname: "/UserDetailsScreen",
                    params: { id: item.id, image: item.image },
                  });
                }
              }}
            >
              <VStack  gap={5}>
                <Text fontFamily="Medium" color="$white" fontSize={30}>
                  {item.name} {item.age}
                </Text>
                <Text fontFamily="Medium" color="$white" fontSize={15}>
                  West (31 KM)
                </Text>
                <Center
                  maxWidth={60}
                  rounded={"$full"}
                  backgroundColor="$backgroundDarkMuted"
                  h={30}
                >
                  <Text fontFamily="Medium" color="$white" fontSize={15}>
                    {item.zodiac}
                  </Text>
                </Center>
              </VStack>
            </TapGestureHandler>


          </Box> */}
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
};

export default SwipeCard;
