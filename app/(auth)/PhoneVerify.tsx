import { Colors } from "@/constants/Colors";
import OtpTextInput from "@/utils/OtpTextInput";
import {
  View,
  Text,
  Box,
  Button,
  ButtonText,
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { AUTH } from "@/constants/config";


const Page = () => {
  const [otp, setOtp] = useState("");

  return (
    <View flex={1} backgroundColor={Colors.background}>
      <Box gap={30} mt={50} w={"100%"}>
        <VStack alignSelf="center" w={'88%'} gap={10}>
          <Text fontSize={23} color="$black" fontFamily="Bold">
            Verification Code
          </Text>
          <Text color="$secondary300" fontFamily="SemiBold">
            A verification code has been sent to 9953728080
          </Text>
        </VStack>
        <Box mt={20} w={'90%'} alignSelf="center">
          <OtpTextInput
            autoFocus
            numberOfInput={4}
            onChangeText={(text) => {
              setOtp(text);
            }}
          />
        </Box>
        <Button
        w={'88%'}
        alignSelf="center"
          onPress={() => {
            router.navigate("/ProfileUpdate");
          }}
          h={60}
          $active-opacity={0.7}
          rounded={"$xl"}
          mt={20}
          bg={Colors.primary}
        >
          <ButtonText fontFamily="Bold" fontSize={16}>
            Continue
          </ButtonText>
        </Button>
      </Box>
    </View>
  );
};

export default Page;
