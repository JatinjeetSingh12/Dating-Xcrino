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
    name: "Action",
  },
  {
    id: 2,
    name: "Comedy",
  },
  {
    id: 3,
    name: "Drama",
  },
  {
    id: 4,
    name: "Horror",
  },
  {
    id: 5,
    name: "Science Fiction",
  },
  {
    id: 6,
    name: "Fantasy",
  },
  {
    id: 7,
    name: "Romance",
  },
  {
    id: 8,
    name: "Thriller",
  },
  {
    id: 9,
    name: "Documentary",
  },
  {
    id: 10,
    name: "Animated",
  },
  {
    id: 11,
    name: "Breaking Bad",
  },
  {
    id: 12,
    name: "Stranger Things",
  },
  {
    id: 13,
    name: "The Godfather",
  },
  {
    id: 14,
    name: "Inception",
  },
  {
    id: 15,
    name: "Titanic",
  },
  {
    id: 16,
    name: "The Dark Knight",
  },
  {
    id: 17,
    name: "Pulp Fiction",
  },
  {
    id: 18,
    name: "The Shawshank Redemption",
  },
  {
    id: 19,
    name: "The Matrix",
  },
  {
    id: 20,
    name: "Forrest Gump",
  },
  {
    id: 21,
    name: "Jurassic Park",
  },
  {
    id: 22,
    name: "The Silence of the Lambs",
  },
  {
    id: 23,
    name: "The Avengers",
  },
  {
    id: 24,
    name: "Black Panther",
  },
  {
    id: 25,
    name: "Frozen",
  },
  {
    id: 26,
    name: "Coco",
  },
  {
    id: 27,
    name: "The Office",
  },
  {
    id: 28,
    name: "Game of Thrones",
  },
  {
    id: 29,
    name: "The Crown",
  },
  {
    id: 30,
    name: "Sherlock",
  },
];

const Page = () => {

  const {movies,setMovies} = useContext(InterestsContext);

  const onPress = (item: string) => {
    if (movies?.includes(item)) {
      const sportsFiler = movies.filter((data) => data !== item);
      setMovies(sportsFiler);
    } else {
      setMovies([...movies, item]);
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
          const isChecked = movies.includes(item.name);
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
