import { Colors } from "@/constants/Colors";
import {
  View,
  Text,
  Box,
  Input,
  InputField,
  InputSlot,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";

const Page = () => {
  return (
    <View flex={1} backgroundColor={Colors.background}>
      <Box gap={30} mt={50} w={"88%"} alignSelf="center">
        <Text fontSize={23} color="$black" fontFamily="Bold">
          Continue with phone number
        </Text>
        <Input
          h={60}
          borderColor="$secondary200"
          borderWidth={1.5}
          rounded={"$xl"}
        >
          <InputSlot mx={20}>
            <Text fontSize={19} color="$black" fontFamily="SemiBold">
              +91
            </Text>
          </InputSlot>
          <InputField
            cursorColor={Colors.primary}
            placeholder="Enter your number"
          />
        </Input>
        <Button onPress={()=>{router.navigate('/(auth)/PhoneVerify')}} h={60} $active-opacity={0.7} rounded={'$xl'} mt={20} w={"100%"} bg={Colors.primary}>
          <ButtonText fontFamily="Bold" fontSize={16}>Continue</ButtonText>
        </Button>
      </Box>
    </View>
  );
};

export default Page;
