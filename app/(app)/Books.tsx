import { View, Text, FlatList } from "react-native";
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
    name: "Fiction",
  },
  {
    id: 2,
    name: "Non-Fiction",
  },
  {
    id: 3,
    name: "Mystery",
  },
  {
    id: 4,
    name: "Fantasy",
  },
  {
    id: 5,
    name: "Science Fiction",
  },
  {
    id: 6,
    name: "Romance",
  },
  {
    id: 7,
    name: "Thriller",
  },
  {
    id: 8,
    name: "Historical Fiction",
  },
  {
    id: 9,
    name: "Biography",
  },
  {
    id: 10,
    name: "Self-Help",
  },
  {
    id: 11,
    name: "Health & Wellness",
  },
  {
    id: 12,
    name: "Children's Books",
  },
  {
    id: 13,
    name: "Young Adult",
  },
  {
    id: 14,
    name: "Poetry",
  },
  {
    id: 15,
    name: "Graphic Novels",
  },
  {
    id: 16,
    name: "Classic Literature",
  },
  {
    id: 17,
    name: "Travel",
  },
  {
    id: 18,
    name: "Cookbooks",
  },
  {
    id: 19,
    name: "Business & Economics",
  },
  {
    id: 20,
    name: "Science & Nature",
  },
  {
    id: 21,
    name: "Philosophy",
  },
  {
    id: 22,
    name: "Religion & Spirituality",
  },
  {
    id: 23,
    name: "Comics",
  },
  {
    id: 24,
    name: "Anthology",
  },
  {
    id: 25,
    name: "Dystopian",
  },
  {
    id: 26,
    name: "Literary Fiction",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 28,
    name: "Memoir",
  },
  {
    id: 29,
    name: "Sports",
  },
  {
    id: 30,
    name: "Parenting",
  },
];


const Page = () => {

  const {books,setBooks} = useContext(InterestsContext);

  const onPress = (item: string) => {
    if (books?.includes(item)) {
      const sportsFiler = books.filter((data) => data !== item);
      setBooks(sportsFiler);
    } else {
      setBooks([...books, item]);
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
          const isChecked = books.includes(item.name);
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
