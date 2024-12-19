import { View, FlatList } from "react-native";
import React, { useContext } from "react";
import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
} from "@gluestack-ui/themed";
import { Colors } from "@/constants/Colors";
import { InterestsContext } from "@/context/InterestsContext";

const data = [
  {
    id: 1,
    name: "Adventure Sports",
  },
  {
    id: 2,
    name: "Adventure Racing",
  },
  {
    id: 3,
    name: "Aerobatics",
  },
  {
    id: 4,
    name: "American Football",
  },
  {
    id: 9,
    name: "Archery",
  },
  {
    id: 10,
    name: "ATV",
  },
  {
    id: 11,
    name: "Auto Racing",
  },
  {
    id: 14,
    name: "Badminton",
  },
  {
    id: 15,
    name: "Baseball",
  },
  {
    id: 16,
    name: "Basketball",
  },
  {
    id: 17,
    name: "Beach Volleyball",
  },
  {
    id: 18,
    name: "BMX",
  },
  {
    id: 19,
    name: "Boxing",
  },
  {
    id: 20,
    name: "Canoeing",
  },
  {
    id: 21,
    name: "Cricket",
  },
  {
    id: 22,
    name: "Cycling",
  },
  {
    id: 23,
    name: "Diving",
  },
  {
    id: 24,
    name: "Equestrian",
  },
  {
    id: 25,
    name: "Fencing",
  },
  {
    id: 26,
    name: "Field Hockey",
  },
  {
    id: 27,
    name: "Figure Skating",
  },
  {
    id: 28,
    name: "Fishing",
  },
  {
    id: 29,
    name: "Golf",
  },
  {
    id: 30,
    name: "Gymnastics",
  },
  {
    id: 31,
    name: "Handball",
  },
  {
    id: 32,
    name: "Ice Hockey",
  },
  {
    id: 33,
    name: "Judo",
  },
  {
    id: 34,
    name: "Karate",
  },
  {
    id: 35,
    name: "Lacrosse",
  },
  {
    id: 36,
    name: "Martial Arts",
  },
  {
    id: 37,
    name: "Mountain Biking",
  },
  {
    id: 38,
    name: "Motocross",
  },
  {
    id: 39,
    name: "Paragliding",
  },
  {
    id: 40,
    name: "Rugby",
  },
  {
    id: 41,
    name: "Sailing",
  },
  {
    id: 42,
    name: "Shooting",
  },
  {
    id: 43,
    name: "Skiing",
  },
  {
    id: 44,
    name: "Snowboarding",
  },
  {
    id: 45,
    name: "Soccer",
  },
  {
    id: 46,
    name: "Surfing",
  },
  {
    id: 47,
    name: "Swimming",
  },
  {
    id: 48,
    name: "Table Tennis",
  },
  {
    id: 49,
    name: "Tennis",
  },
  {
    id: 50,
    name: "Triathlon",
  },
  {
    id: 51,
    name: "Volleyball",
  },
  {
    id: 52,
    name: "Water Polo",
  },
  {
    id: 53,
    name: "Weightlifting",
  },
  {
    id: 54,
    name: "Wrestling",
  },
];

const Page = () => {
  const { sports, setSports } = useContext(InterestsContext);

  const onPress = (item: string) => {
    if (sports?.includes(item)) {
      const sportsFiler = sports.filter((data) => data !== item);
      setSports(sportsFiler);
    } else {
      setSports([...sports, item]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Box w={"90%"} alignSelf="center">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            const isChecked = sports.includes(item.name);
            return (
              <Checkbox
                onPress={() => onPress(item.name)}
                my={14}
                w={"$full"}
                isChecked={isChecked}
                value={item.name}
                justifyContent="space-between"
                size="md"
                isInvalid={false}
                isDisabled={false}
              >
                <CheckboxLabel $checked-color={Colors.primary}>
                  {item.name}
                </CheckboxLabel>
                <CheckboxIndicator
                  $checked-borderColor={Colors.primary}
                  mr="$2"
                >
                  <CheckboxIcon
                    color={Colors.background}
                    backgroundColor={Colors.primary}
                    as={CheckIcon}
                  />
                </CheckboxIndicator>
              </Checkbox>
            );
          }}
        />
      </Box>
    </View>
  );
};

export default Page;