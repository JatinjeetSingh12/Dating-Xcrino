import { Colors } from "@/constants/Colors";
import { Text, Box, VStack } from "@gluestack-ui/themed";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import Facebook from "@/assets/images/facebook.svg";
import { APP_NAME } from "@/constants/config";
import { Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const Page = () => {
  const {width} = Dimensions.get('window')
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Logo width={170} height={170} />
        <Text color={Colors.primary} fontFamily="Bold" fontSize={25}>
          {APP_NAME}
        </Text>
        <Text fontFamily="Bold" fontSize={18} mt={20} color="$blueGray500">
          1,103,310 matches made
        </Text>
      </Box>
      <Box flex={1.2} justifyContent="flex-end">
        <VStack gap={15} alignItems="center" justifyContent="center">
          <TouchableOpacity
          onPress={()=>{router.push('/LoginwithPhone')}}
            style={{
              width: width*0.85,
              flexDirection: "row",
              paddingVertical: 14,
              borderRadius: 10,
              gap:20,
              paddingLeft:20,
              backgroundColor: "#e5e7eb",
            }}
          >
            <FontAwesome5 name="mobile" size={24} color={Colors.primary} />
            <Text fontFamily="Bold" >
              Countinue with phone number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width*0.85,
              flexDirection: "row",
              paddingVertical: 14,
              borderRadius: 10,
              gap:20,
              paddingLeft:20,
              backgroundColor: "#e5e7eb",
            }}
          >
            <Facebook width={20} height={20} />
            <Text textAlign="center" fontFamily="Bold">
              Countinue with Facebook
            </Text>
          </TouchableOpacity>

          <Text
            mt={30}
            mb={20}
            w={"80%"}
            fontFamily="Light"
            fontSize={14}
            textAlign="center"
          >
            I have read and agree to {APP_NAME}'s{" "}
            <Text fontFamily="Medium" fontSize={14}>
              Terms of Service{" "}
            </Text>{" "}
            and{" "}
            <Text fontFamily="Medium" fontSize={14}>
              Privacy Policy
            </Text>
          </Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default Page;
