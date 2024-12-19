import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  HStack,
} from "@gluestack-ui/themed";
import { Colors } from "@/constants/Colors";
import { InterestsContext } from "@/context/InterestsContext";

const data = [
  {
    id: 1,
    name: "Pizza",
  },
  {
    id: 2,
    name: "Sushi",
  },
  {
    id: 3,
    name: "Burgers",
  },
  {
    id: 4,
    name: "Pasta",
  },
  {
    id: 5,
    name: "Ice Cream",
  },
  {
    id: 6,
    name: "Tacos",
  },
  {
    id: 7,
    name: "Fried Chicken",
  },
  {
    id: 8,
    name: "Steak",
  },
  {
    id: 9,
    name: "Chocolate Cake",
  },
  {
    id: 10,
    name: "Dumplings",
  },
  {
    id: 11,
    name: "Samosas",
  },
  {
    id: 12,
    name: "Seafood",
  },
  {
    id: 13,
    name: "Salad",
  },
  {
    id: 14,
    name: "Barbecue Ribs",
  },
  {
    id: 15,
    name: "Pancakes",
  },
  {
    id: 16,
    name: "Quiche",
  },
  {
    id: 17,
    name: "Mango Sticky Rice",
  },
  {
    id: 18,
    name: "Macarons",
  },
  {
    id: 19,
    name: "Chili",
  },
  {
    id: 20,
    name: "Falafel",
  },
  {
    id: 21,
    name: "Risotto",
  },
  {
    id: 22,
    name: "Ceviche",
  },
  {
    id: 23,
    name: "Greek Salad",
  },
  {
    id: 24,
    name: "Pad Thai",
  },
  {
    id: 25,
    name: "Crepes",
  },
  {
    id: 26,
    name: "Stuffed Peppers",
  },
  {
    id: 27,
    name: "Bruschetta",
  },
  {
    id: 28,
    name: "Poke Bowl",
  },
  {
    id: 29,
    name: "Smoothie Bowl",
  },
  {
    id: 30,
    name: "Biryani",
  },
];

const Page = () => {
  const { setFood, food } = useContext(InterestsContext);

  const onPress = (item: string) => {
    if (food?.includes(item)) {
      const sportsFiler = food.filter((data) => data !== item);
      setFood(sportsFiler);
    } else {
      setFood([...food, item]);
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
            const isChecked = food.includes(item.name);
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
