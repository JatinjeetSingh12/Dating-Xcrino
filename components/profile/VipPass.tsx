import { Colors } from "@/constants/Colors";
import { CURRENCY } from "@/constants/config";
import { Box, Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, FlatList } from "react-native";
import FastImage from "react-native-fast-image";

const data = [
  {
    id:1,
    name:'VIP',
    text:" Unlock your unlimited likes,5 Super Likes daily, and more privileges!",
    price:"140",
    color1:"#FFDEAD",
    color2:"#E1C16E",
    textColor:"#964B00",
    numBgColor:"#FFDEAD"
  },
  {
    id:2,
    name:'SEE',
    text:"See who likes you and boost your matching",
    price:"650",
    color1:"#FFA500",
    color2:"#F28C28",
    textColor:"#964B00",
    numBgColor:"#FFDEAD"
  },
  {
    id:3,
    name:'Premium',
    text:"Unlock all paid features, including unlimited sliding cards, see who Likes You, free Boost and Spotlight.",
    price:"1,650",
    color1:"#6A3717",
    color2:"#230D00",
    textColor:"#F3E5AB",
    numBgColor:"#F3E5AB"
  },

]

const VipPass = () => {
  const { width, height } = Dimensions.get("window");


  return (
    <Box>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index,item }) => (
          <LinearGradient
          colors={[item.color1,item.color2]}
          start={{x:0,y:0}}
          end={{x:1,y:1}}
          style={{
            borderRadius:30,
            marginLeft:index === 0 ? 14 : 0,
            marginRight:14,
            minHeight:height * 0.17,
            width:width * 0.9,
          }}
          >
            <HStack justifyContent="space-between" alignItems="center" mt={8} mx={30}>
              <VStack  gap={20}>
                <Text ml={4} fontSize={24} fontFamily="Bold" color={item.textColor}>
                  {item.name}
                </Text>
                <Center p={8} backgroundColor={item.numBgColor} rounded={"$xl"}>
                  <Text fontFamily="Regular" color={item.id===3?'$black':item.textColor}>
                    only {CURRENCY}{item.price}
                  </Text>
                </Center>
              </VStack>
              <FastImage 
              source={require('../../assets/images/vip.png')}
              style={{width:80,height:80}}
              />
            </HStack>
            <Text mb={10} mt={5} mx={30} fontSize={10} fontFamily="Regular" color={item.textColor}>
              {item.text}
            </Text>
          </LinearGradient>
        )}
      />
    </Box>
  );
};

export default VipPass;
