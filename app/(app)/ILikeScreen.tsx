import { Colors } from "@/constants/Colors";
import { Box, Pressable,Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { chatsList } from "./(tabs)/MessagesScreen";

const Page = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <Box style={{ width: width * 0.99, alignSelf: "center" }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={chatsList}
          numColumns={2}
          renderItem={({item}) => (
            <Pressable onPress={()=>{router.navigate({pathname:'/UserDetailsScreen',params:{image:item.userProfileImg,showLike:"no"}})}} position="relative" w={width * 0.47} m={4} h={height * 0.28} borderRadius={10}>
              <FastImage
                source={{
                  uri:item.userProfileImg,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
              <Text fontSize={12} position="absolute" left={6} bottom={6} color="$white" fontFamily="Bold">19 Km-22</Text>
            </Pressable>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Page;
