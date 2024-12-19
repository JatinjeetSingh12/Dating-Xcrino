import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  HStack,
  Pressable,
} from "@gluestack-ui/themed";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { InterestsContext } from "@/context/InterestsContext";

const data = [
  {
    id: 1,
    name: "Classical",
  },
  {
    id: 2,
    name: "Rock",
  },
  {
    id: 3,
    name: "Jazz",
  },
  {
    id: 4,
    name: "Blues",
  },
  {
    id: 5,
    name: "Country",
  },
  {
    id: 6,
    name: "Electronic",
  },
  {
    id: 7,
    name: "Hip Hop",
  },
  {
    id: 8,
    name: "Pop",
  },
  {
    id: 9,
    name: "R&B",
  },
  {
    id: 10,
    name: "Reggae",
  },
  {
    id: 11,
    name: "Soul",
  },
  {
    id: 12,
    name: "Folk",
  },
  {
    id: 13,
    name: "Heavy Metal",
  },
  {
    id: 14,
    name: "Punk",
  },
  {
    id: 15,
    name: "Ska",
  },
  {
    id: 16,
    name: "Disco",
  },
  {
    id: 17,
    name: "Funk",
  },
  {
    id: 18,
    name: "Techno",
  },
  {
    id: 19,
    name: "House",
  },
  {
    id: 20,
    name: "Trance",
  },
  {
    id: 21,
    name: "Ambient",
  },
  {
    id: 22,
    name: "Dubstep",
  },
  {
    id: 23,
    name: "Drum and Bass",
  },
  {
    id: 24,
    name: "Indie Rock",
  },
  {
    id: 25,
    name: "Alternative Rock",
  },
  {
    id: 26,
    name: "Grunge",
  },
  {
    id: 27,
    name: "Progressive Rock",
  },
  {
    id: 28,
    name: "Gospel",
  },
  {
    id: 29,
    name: "Opera",
  },
  {
    id: 30,
    name: "Latin",
  },
  {
    id: 31,
    name: "Salsa",
  },
  {
    id: 32,
    name: "Reggaeton",
  },
  {
    id: 33,
    name: "Flamenco",
  },
  {
    id: 34,
    name: "K-Pop",
  },
  {
    id: 35,
    name: "J-Pop",
  },
  {
    id: 36,
    name: "World Music",
  },
  {
    id: 37,
    name: "Afrobeat",
  },
  {
    id: 38,
    name: "Celtic",
  },
  {
    id: 39,
    name: "New Age",
  },
  {
    id: 40,
    name: "Chillout",
  },
  {
    id: 41,
    name: "Bossa Nova",
  },
  {
    id: 42,
    name: "Swing",
  },
  {
    id: 43,
    name: "Bluegrass",
  },
  {
    id: 44,
    name: "Baroque",
  },
  {
    id: 45,
    name: "Romantic",
  },
  {
    id: 46,
    name: "Post-Rock",
  },
  {
    id: 47,
    name: "Synthpop",
  },
  {
    id: 48,
    name: "Dancehall",
  },
  {
    id: 49,
    name: "Trap",
  },
  {
    id: 50,
    name: "Lo-fi",
  },
];


const Page = () => {


  const navigation = useNavigation();

  const {music,setMusic} = useContext(InterestsContext)




  const onPress = (item: string) => {
    if (music.includes(item)) {
      const sportsFiler = music.filter((data) => data !== item);
      setMusic(sportsFiler);
    } else {
      setMusic([...music, item]);
    }
  };


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={()=>{router.navigate({pathname:'/EditInfo',params:{music}})}} style={{ marginRight: 10 }}>
          <Ionicons name="chevron-back-outline" size={25} color="black" />
        </Pressable>
      ),
    });
  }, [navigation, music]);


  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Box w={"90%"} alignSelf="center">
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            const isChecked = music.includes(item.name);
           return (
            <Checkbox
              my={14}
              onPress={()=>onPress(item.name)}
              w={"$full"}
              value={item.name}
              justifyContent="space-between"
              size="md"
              isChecked={isChecked}
              isInvalid={false}
              isDisabled={false}
            >
              <CheckboxLabel $checked-color={Colors.primary}>{item.name}</CheckboxLabel>
              <CheckboxIndicator $checked-borderColor={Colors.primary}   mr="$2">
                <CheckboxIcon
                  color={Colors.background}
                  backgroundColor={Colors.primary}
                  as={CheckIcon}
                />
              </CheckboxIndicator>
            </Checkbox>
          )}}
        />
      </Box>
    </View>
  );
};

export default Page;
