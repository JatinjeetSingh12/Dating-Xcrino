import { View, Text, Dimensions, Image, Animated } from "react-native";
import React, { useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const { height, width } = Dimensions.get("window");

const TinderCard = ({ item, isFirst, swipe, ...rest }: any) => {


  console.log(item);
  

  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["8deg", "0deg", "-8deg"],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            { position: "absolute", top: 100, left: 20 },
            { opacity: likeOpacity },
          ]}
        >
          {/* <TinderLike type={'Like'} /> */}
        </Animated.View>
        <Animated.View
          style={[
            { position: "absolute", top: 100, right: 20 },
            { opacity: rejectOpacity },
          ]}
        >
          {/* <TinderLike type={'Nope'} /> */}
        </Animated.View>
      </>
    );
  }, []);

  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  const screenHeight = height*0.7;

  return (
    <Animated.View
      style={[
        {
          width: width * 0.8,
          height: screenHeight,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop:20
        },
        // isFirst && {
        //   transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
        // },
      ]}
      {...rest}
    >
      <Image
        resizeMode="cover"
        source={item.image}
        style={{ width: "100%", height: "100%", borderRadius: 20 }}
      />
      {isFirst && renderChoice()}
      <LinearGradient
        // colors={["transparent", "transparent", "rgba(0,0,0,0.5)"]}
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   position: "absolute",
        //   borderRadius: 20,
        // }}
        style={{ flex: 1, borderRadius: 1 }}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 1 }}
        colors={["transparent", "rgba(0,0,0,0.95)"]}
      >

         <Text
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            color: '#fff',
            fontSize: 40,
          }}>
          {item.title}
        </Text>

      </LinearGradient>
    </Animated.View>
  );
};

export default TinderCard;
