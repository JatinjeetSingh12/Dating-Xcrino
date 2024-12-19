import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import {
  Box,
  Text,
  ScrollView,
  Button,
  ButtonText,
  Center,
  Pressable,
} from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import Loader from "@/components/common/Loader";
import * as SecureStore from 'expo-secure-store';
import { AUTH } from "@/constants/config";


const Page = () => {
  const { height } = Dimensions.get("window");

  const [image, setImage] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState(false);

  const pickImage = async () => {
    try {
      setImageLoading(true);
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
    } finally {
      SecureStore.setItem(AUTH,'key');
      router.navigate("/(app)/(tabs)/SwipeCardScreen");

      setImageLoading(false);
    }
  };

  if (imageLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <ScrollView>
        <Box gap={30} mt={100} w={"88%"} alignSelf="center">
          <Text fontSize={26} color="$black" fontFamily="Bold">
            Your Profile Photo
          </Text>
          <Box borderRadius={15} backgroundColor="$white">
            <Box h={height * 0.35} >
              <Center flex={1} bg="$white" borderTopLeftRadius={15} borderTopRightRadius={15}>
                <FastImage
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                  }}
                  source={require("@/assets/images/add-image.jpg")}
                />
              </Center>
            </Box>
            <Text
            mb={10}
              fontFamily="Medium"
              textAlign="center"
              fontSize={12}
            >
              Please upload{" "}
              <Text color={Colors.primary} fontFamily="SemiBold" fontSize={12}>
                a photo that clearly shows your face
              </Text>
              .
            </Text>
            <Pressable
            borderBottomRightRadius={15}
            borderBottomLeftRadius={15}
              justifyContent="center"
              alignItems="center"
              onPress={pickImage}
              bg={Colors.primary}
              $active-opacity={0.7}
              h={67}
            >
              <Text color="$white" fontFamily="Bold">
                ADD A PHOTO
              </Text>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
