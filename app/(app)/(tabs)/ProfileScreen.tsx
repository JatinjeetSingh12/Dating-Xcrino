import MoreService from "@/components/profile/MoreService";
import ProfileHeader from "@/components/profile/ProfileHeader";
import VipPass from "@/components/profile/VipPass";
import { Colors } from "@/constants/Colors";
import { Box, ScrollView } from "@gluestack-ui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ScrollView>
        <Box w={'100%'} gap={20}>
          <Box w={"95%"} alignSelf="center">
            <ProfileHeader />
          </Box>
          {/* <VipPass /> */}
          <Box w={"95%"} alignSelf="center">
            <MoreService />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
