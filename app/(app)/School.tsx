import { Colors } from "@/constants/Colors";
import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {

  return (
    <SafeAreaView edges={['bottom']} style={{flex:1,backgroundColor:Colors.background}}>
      <Box flex={1} w={"85%"} alignSelf="center">

        <Input mt={16} h={50} justifyContent="flex-start" >
          <InputField
            placeholder="Please enter the school name"
          />
        </Input>
      </Box>
      <Button onPress={()=>router.back()} rounded={'$lg'} mb={4} alignSelf="flex-end" backgroundColor={Colors.primary} mx={10}>
        <ButtonText color="$white" fontFamily="Bold">Submit</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default Page;