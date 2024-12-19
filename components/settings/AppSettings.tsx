import { Colors } from "@/constants/Colors";
import { APP_NAME } from "@/constants/config";
import { Entypo, EvilIcons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View, Text, VStack, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { Alert, FlatList, Share } from "react-native";

const AppSettings = () => {


  const onShare = async () => {
    try {
      const result = await Share.share({
        url:`https://play.google.com/store/apps/details?id=com.${APP_NAME}`
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const data = [
    {
      id: 1,
      heading: "Personal Information",
      subHeading: "Name,gender,birthday",
      onPress:()=>{router.navigate('/PersonalInformationScreen')},
      Icon:()=><FontAwesome name="user-circle-o" size={20} color={Colors.primary} />
    },
    {
      id: 2,
      heading: "Account & Security",
      subHeading: "Manage your account settings",
      onPress:()=>{router.navigate('/Account&Security')},
      Icon:()=><MaterialIcons name="manage-accounts" size={26} color="#1F51FF" />

    },
    {
      id: 3,
      heading: "Feedback",
      subHeading: `Let us know about your experience on ${APP_NAME}`,
      onPress:()=>{},
      Icon:()=><EvilIcons name="pencil" size={27} color="red" />

    },
    {
      id: 4,
      heading: "Help",
      subHeading: "",
      onPress:()=>{},
      Icon:()=><FontAwesome name="question-circle" size={20} color="grey" />
    },
    {
      id: 5,
      heading: `Share ${APP_NAME}`,
      subHeading: `invite your friends to ${APP_NAME}`,
      onPress:()=>{onShare()},
      Icon:()=><Entypo name="share" size={18} color="orange" />

    },
    {
      id: 6,
      heading: `About ${APP_NAME}`,
      subHeading: `More information about ${APP_NAME}`,
      onPress:()=>{},
      Icon:()=><MaterialCommunityIcons name="information-outline" size={24} color="blue" />
      

    },
  ];

  return (
    <View w={"92%"} alignSelf="center">
      <Text
        my={4}
        mt={10}
        color={Colors.primary}
        fontFamily="SemiBold"
        fontSize={15}
        mb={10}
      >
        App Settings
      </Text>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Pressable alignItems="center" gap={15} onPress={item.onPress} flexDirection="row"  my={10}>
            <item.Icon />
            <VStack gap={5}>
              <Text fontFamily="Medium" color="$black" fontSize={16}>
                {item.heading}
              </Text>
              {item.subHeading && (
                <Text fontFamily="Regular" fontSize={12} color="$secondary400">
                  {item.subHeading}
                </Text>
              )}
            </VStack>
          </Pressable>
        )}
      />

    </View>
  );
};

export default AppSettings;