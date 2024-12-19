import { Colors } from "@/constants/Colors";
import { InterestsContext } from "@/context/InterestsContext";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Text, Box, HStack, Pressable, Divider } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useContext } from "react";

const Interests = () => {
  const { sports, music, books, food, movies, travel } =
    useContext(InterestsContext);

  return (
    <Box gap={5} mt={18}>
      <Text px={20} fontFamily="Medium" fontSize={14} color={Colors.primary}>
        Interests
      </Text>
      <Pressable
        onPress={() => {
          router.navigate("/Sports");
        }}
        px={20}
        $active-backgroundColor="$secondary200"
        py={20}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <MaterialIcons name="sports-mma" size={22} color="green" />
        {sports.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What sports are you into?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {sports.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Pressable
        px={20}
        onPress={() => {
          router.navigate("/Music");
        }}
        $active-backgroundColor="$secondary200"
        py={20}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <Entypo name="music" size={24} color="blue" />
        {music.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What music do you like?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {music.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Pressable
        px={20}
        onPress={() => {
          router.navigate("/FavouriteFood");
        }}
        $active-backgroundColor="$secondary200"
        py={20}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={24}
          color="orange"
        />
        {food.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What's your favorite food?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {food.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Pressable
        px={20}
        $active-backgroundColor="$secondary200"
        onPress={() => {
          router.navigate("/FavouriteMovie");
        }}
        py={20}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <Feather name="tv" size={22} color="purple" />
        {movies.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              Favourite movies and Tv shows?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {movies.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Pressable
        px={20}
        $active-backgroundColor="$secondary200"
        py={20}
        onPress={() => {
          router.navigate("/Books");
        }}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <Entypo name="book" size={20} color="red" />
        {books.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              What books do you prefer?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {books.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Pressable
        px={20}
        onPress={() => {
          router.navigate("/Travel");
        }}
        $active-backgroundColor="$secondary200"
        py={20}
        gap={20}
        alignItems="center"
        flexDirection="row"
      >
        <Ionicons name="airplane-outline" size={20} color={Colors.primary} />
        {travel.length === 0 ? (
          <HStack gap={5} alignItems="center">
            <AntDesign name="plus" size={14} color={"green"} />
            <Text fontSize={15} fontFamily="Medium" color="$secondary400">
              Where have you traveled?
            </Text>
          </HStack>
        ) : (
          <Box flex={1} flexDirection={"row"} flexWrap="wrap" gap={12}>
            {travel.map((item, index) => (
              <Box
                key={index}
                px={10}
                py={3}
                rounded={"$lg"}
                borderWidth={1}
                borderColor="$secondary300"
              >
                <Text fontFamily="Bold" color="$secondary300">
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
        )}
      </Pressable>
      <Divider mt={13} w={"95%"} alignSelf="center" />
    </Box>
  );
};

export default Interests;
