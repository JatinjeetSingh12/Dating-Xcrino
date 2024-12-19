import EditImages from "@/components/EditProfile/EditImages";
import Interests from "@/components/EditProfile/Interests";
import PersonalInfo from "@/components/EditProfile/PersonalInfo";
import { Colors } from "@/constants/Colors";
import { APP_NAME } from "@/constants/config";
import { Box, Divider, ScrollView, Text } from "@gluestack-ui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const EditInfo = () => {


  return (

    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <EditImages />
        <PersonalInfo />
        <Interests />
        <Box px={20} my={20} gap={10}>
          <Text fontFamily="Medium" fontSize={14} color={"$black"}>
            My Account
          </Text>
          <Box gap={3}>
            <Text color="$black" fontFamily="Medium">{APP_NAME} ID</Text>
            <Text fontFamily="Light" color="$secondary400" underline>
              44003
            </Text>
          </Box>
        </Box>
        <Divider mb={43} w={"95%"} alignSelf="center" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditInfo;