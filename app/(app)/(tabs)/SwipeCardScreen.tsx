import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { Box, Pressable, View } from "@gluestack-ui/themed";
import { Colors } from "@/constants/Colors";
import SwipeCard from "@/components/SwipeCard/SwipeCard";
import { AntDesign,  Entypo, Fontisto, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const userData = [
  {
    id: 1,
    name: "Lena",
    image: [
      "https://plus.unsplash.com/premium_photo-1676660359316-273bb172a0df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww",
      "https://cdn4.sharechat.com/33d5318_1c8/compressed_gm_40_img_404735_38d917dc_1714564403120_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=120_sc.jpg",
      "https://i.pinimg.com/564x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg",
    ],
    age: 24,
    zodiac: "Cancer",
  },
  {
    id: 2,
    name: "Sophia",
    image: [
      "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/04/woman-beach-1280.jpg?quality=86&strip=all",
    ],
    age: 29,
    zodiac: "Leo",
  },
  {
    id: 3,
    name: "Isabella",
    image: [
      "https://miro.medium.com/v2/resize:fit:1400/1*kOsFOa1NCLrVSQn0L5NPRA.jpeg",
      "https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp",
    ],
    age: 26,
    zodiac: "Virgo",
  },
  {
    id: 4,
    name: "Gigi",
    image: [
      "https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_640.jpg",
    ],
    age: 23,
    zodiac: "Gemini",
  },
  {
    id: 5,
    name: "Eve",
    image: [
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    ],
    age: 24,
    zodiac: "Aries",
  },
  {
    id: 6,
    name: "Darcie",
    image: [
      "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
      "https://wallpapers.com/images/high/cute-profile-picture-2yemvofo5602fiur.jpg",
      "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      "https://photosnow.org/wp-content/uploads/2024/04/83befa54bc315244d6d568c4ab01e4fe-1.jpg",
    ],
    age: 25,
    zodiac: "Taurus",
  },
  {
    id: 8,
    name: "Emily",
    image: [
      "https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg",
    ],
    age: 27,
    zodiac: "Libra",
  },
  {
    id: 9,
    name: "Ivan",
    image: [
      "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
    ],
    age: 23,
    zodiac: "Gemini",
  },
  {
    id: 10,
    name: "Judy",
    image: ["https://pixlr.com/images/index/ai-image-generator-two.webp"],
    age: 23,
    zodiac: "Gemini",
  },
  {
    id: 11,
    name: "Mallory",
    image: [
      "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg",
    ],
    age: 23,
    zodiac: "Gemini",
  },
];

const Page = () => {
  const [data, setData] = useState(userData);
  const { width, height } = Dimensions.get("window");

  const swipe = useRef(new Animated.ValueXY()).current;

  const [activeLikeButton, setActiveLikeButton] = useState(false);
  const [activeDisLikeButton, setActiveDisLikeButton] = useState(false);
  const [activeStarButton, setActiveStarButton] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setData(userData);
    }
  }, [data]);

  // const panResponder = PanResponder.create({
  //   onMoveShouldSetPanResponder: () => true,
  //   onPanResponderMove: (_, { dx, dy }) => {
  //     swipe.setValue({ x: dx, y: dy });
  //   },
  //   onPanResponderRelease: (_, { dx, dy }) => {
  //     let isActionActive = Math.abs(dx);

  //     console.log(isActionActive)

  //     if (isActionActive > 60) {
  //       Animated.timing(swipe, {
  //         toValue: { x: dx * 28, y: dy },
  //         useNativeDriver: true,
  //         duration: 500,
  //       }).start(removeCard);
  //     } else {
  //       Animated.spring(swipe, {
  //         toValue: { x: 0, y: 0 },
  //         useNativeDriver: true,
  //         friction: 5,
  //       }).start();
  //     }
  //   },
  // });

  const removeCard = useCallback(() => {
    setData((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleDislike = () => {
    Animated.timing(swipe, {
      toValue: { x: -width * 1.5, y: 0 },
      useNativeDriver: true,
      duration: 300,
    }).start(removeCard);
  };

  const handleLike = () => {
    Animated.timing(swipe, {
      toValue: { x: width * 1.5, y: 0 },
      useNativeDriver: true,
      duration: 300,
    }).start(removeCard);
  };

  return (
    <View flex={1} backgroundColor={Colors.background} pt={2}>
      <Box
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "black",
          width: width * 0.97,
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        {data
          .map((item, index) => {
            const isFirst = index === 0;

            return (
              <SwipeCard
                key={item.id}
                isFirst={isFirst}
                item={item}
                swipe={swipe}
                removeCard={removeCard}
              />
            );
          })
          .reverse()}
      </Box>

      <Box
        borderBottomRightRadius={10}
        borderBottomLeftRadius={10}
        width={width * 0.97}
        alignSelf="center"
        h={height * 0.1}
        backgroundColor="$black"
        flexDirection="row"
        position="absolute"
        alignItems="center"
        gap={20}
        justifyContent="center"
        bottom={10}
      >
        <Pressable
          onPress={handleDislike}
          backgroundColor="$backgroundDarkMuted"
          $active-backgroundColor="$white"
          alignItems="center"
          justifyContent="center"
          onPressIn={() => setActiveDisLikeButton(true)}
          onPressOut={() => setActiveDisLikeButton(false)}
          w={65}
          height={65}
          rounded={"$full"}
        >
          <Entypo
            name="cross"
            size={40}
            color={activeDisLikeButton ? "black" : "white"}
          />
        </Pressable>
        <Pressable
          onPress={()=>router.navigate('/SubscriptionScreen')}
          backgroundColor="$backgroundDarkMuted"
          $active-backgroundColor="#0096FF"
          alignItems="center"
          justifyContent="center"
          onPressIn={() => setActiveStarButton(true)}
          onPressOut={() => setActiveStarButton(false)}
          w={55}
          height={55}
          rounded={"$full"}
        >
          <Ionicons name="star" size={28}
            color={activeStarButton ? "white" : "#0096FF"}
            />
        </Pressable>
        <Pressable
          onPress={handleLike}
          backgroundColor="$backgroundDarkMuted"
          $active-backgroundColor="#DE3163"
          onPressIn={() => setActiveLikeButton(true)}
          onPressOut={() => setActiveLikeButton(false)}
          alignItems="center"
          justifyContent="center"
          w={65}
          height={65}
          rounded={"$full"}
        >
          <AntDesign
            name="heart"
            size={28}
            color={activeLikeButton ? "white" : "#DE3163"}
          />
        </Pressable>
      </Box>
    </View>
  );
};

export default Page;
