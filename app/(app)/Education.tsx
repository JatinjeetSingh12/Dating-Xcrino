import { Colors } from "@/constants/Colors";
import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "High School",
  },
  {
    id: 2,
    name: "Bachelors",
  },
  {
    id: 3,
    name: "Masters",
  },
  {
    id: 4,
    name: "PhD",
  },
  {
    id: 5,
    name: "Others",
  },
];

const Page = () => {
  const [degree, setDegree] = useState("");

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <Box flex={1} w={"85%"} mt={20} alignSelf="center">
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Button
              onPress={() => setDegree(item.name)}
              rounded={"$lg"}
              h={47}
              my={10}
              backgroundColor={
                degree === item.name ? Colors.primary : "$secondary100"
              }
            >
              <ButtonText color={degree === item.name ? "$white" : "$black"}>
                {item.name}
              </ButtonText>
            </Button>
          )}
        />
      </Box>
      <Button
        onPress={() => router.back()}
        rounded={"$lg"}
        mb={4}
        alignSelf="flex-end"
        backgroundColor={Colors.primary}
        mx={10}
      >
        <ButtonText color="$white" fontFamily="Bold">
          Submit
        </ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default Page;
