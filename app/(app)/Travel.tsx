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
    name: "Paris, France",
  },
  {
    id: 2,
    name: "Rome, Italy",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
  },
  {
    id: 4,
    name: "New York City, USA",
  },
  {
    id: 5,
    name: "London, England",
  },
  {
    id: 6,
    name: "Sydney, Australia",
  },
  {
    id: 7,
    name: "Bangkok, Thailand",
  },
  {
    id: 8,
    name: "Dubai, UAE",
  },
  {
    id: 9,
    name: "Istanbul, Turkey",
  },
  {
    id: 10,
    name: "Barcelona, Spain",
  },
  {
    id: 11,
    name: "Cape Town, South Africa",
  },
  {
    id: 12,
    name: "Machu Picchu, Peru",
  },
  {
    id: 13,
    name: "Santorini, Greece",
  },
  {
    id: 14,
    name: "Cancun, Mexico",
  },
  {
    id: 15,
    name: "Amsterdam, Netherlands",
  },
  {
    id: 16,
    name: "Hong Kong, China",
  },
  {
    id: 17,
    name: "Rio de Janeiro, Brazil",
  },
  {
    id: 18,
    name: "Lisbon, Portugal",
  },
  {
    id: 19,
    name: "Prague, Czech Republic",
  },
  {
    id: 20,
    name: "Vancouver, Canada",
  },
  {
    id: 21,
    name: "Kyoto, Japan",
  },
  {
    id: 22,
    name: "Budapest, Hungary",
  },
  {
    id: 23,
    name: "Florence, Italy",
  },
  {
    id: 24,
    name: "Seattle, USA",
  },
  {
    id: 25,
    name: "Mumbai, India",
  },
  {
    id: 26,
    name: "Stockholm, Sweden",
  },
  {
    id: 27,
    name: "Melbourne, Australia",
  },
  {
    id: 28,
    name: "Athens, Greece",
  },
  {
    id: 29,
    name: "Edinburgh, Scotland",
  },
  {
    id: 30,
    name: "Copenhagen, Denmark",
  },
];

const Page = () => {
  const { travel, setTravel } = useContext(InterestsContext);

  const onPress = (item: string) => {
    if (travel?.includes(item)) {
      const sportsFiler = travel.filter((data) => data !== item);
      setTravel(sportsFiler);
    } else {
      setTravel([...travel, item]);
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
            const isChecked = travel.includes(item.name);
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
