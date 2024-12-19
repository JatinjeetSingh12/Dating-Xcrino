import {Image, View, Animated, PanResponder, TouchableOpacity, Dimensions } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import TinderCard from "@/components/home/TinderCard";


const userData = [
  { image: require("../../assets/images/img1.webp"), id: 1, title: "Hulk" },
  {
    image: require("../../assets/images/img2.webp"),
    id: 2,
    title: "Ironman",
  },
  { image: require("../../assets/images/img3.webp"), id: 3, title: "Thor" },
  { image: require("../../assets/images/img4.webp"), id: 3, title: "Thor" },
  { image: require("../../assets/images/img5.webp"), id: 3, title: "Thor" },
  { image: require("../../assets/images/img6.webp"), id: 3, title: "Thor" },
  { image: require("../../assets/images/img7.webp"), id: 3, title: "Thor" },

];

const {height, width} = Dimensions.get('window');


const HomeScreen = () => {
  const [data, setData] = useState(userData);

  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  
  const removeCard = useCallback(() => {
    setData((prepState) => prepState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  useEffect(() => {
    if (!data.length) {
      setData(userData);
    }
  }, [data]);

 

  const handleChoiceButtons = useCallback(
    (direction:any) => {
      Animated.timing(swipe.x, {
        toValue: direction * width,
        duration: 500,
        useNativeDriver: true,
      }).start(removeCard);
    },
    [removeCard, swipe.x],
  );

  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      console.log("dx:" + dx + " dy:" + dy);
      swipe.setValue({ x: dx, y: dy });
    },

    onPanResponderRelease: (_, { dx, dy }) => {
      console.log("released:" + "dx:" + dx + " dy:" + dy);
      // let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 500 * dx, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });


  const handelSelection = useCallback(
    (direction: any) => {
      Animated.timing(swipe, {
        toValue: { x: direction * 500, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard]
  );
  return (
    <View style={{ flex: 1,position:'relative',backgroundColor:'white'}}>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
              <TinderCard
                item={item}
                rotate={rotate}
                isFirst={isFirst}
                swipe={swipe}
                {...dragHanlders}
              />
          );
        })
        .reverse()}

      <View
        style={{
          position:'absolute',
          bottom:40,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#fff",
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            handleChoiceButtons(-1);
          }}
        >
          <Image
            source={require("../../assets/images/cancel.png")}
            style={{ width: 34, height: 34, tintColor: "#FF0060" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#fff",
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            handleChoiceButtons(1);
          }}
        >
          <Image
            source={require("../../assets/images/heart.png")}
            style={{ width: 40, height: 40, tintColor: "#00eda6" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;


