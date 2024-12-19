import { Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Box,
  Pressable,
} from "@gluestack-ui/themed";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "@/constants/Colors";

const EditImages = () => {
  const { width, height } = Dimensions.get("window");
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [images, setImages] = useState<(string | null)[]>(Array(6).fill(null));

  useEffect(() => {
    const updatedImages = [...images];
    updatedImages[0] =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s';
    setImages(updatedImages);
  }, []);


  const handleClose = () => setShowActionsheet(false);

  const pickImage = async (index: number) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const updatedImages = [...images];
        updatedImages[index] = result.assets[0].uri;
        setImages(updatedImages);
        handleClose();
      }
    } catch (error) {
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  return (
    <Box gap={10}>
      {[0, 1].map((row) => (
        <Box
          key={row}
          flexDirection="row"
          gap={10}
          w={"95%"}
          justifyContent="space-evenly"
          alignSelf="center"
        >
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Pressable
                key={index}
                onPress={() =>
                  images[index]
                    ? (setSelectedIndex(index), setShowActionsheet(true))
                    : pickImage(index)
                }
                alignItems="center"
                justifyContent="center"
                borderStyle="dashed"
                borderColor="$secondary400"
                rounded={"$lg"}
                h={height * 0.16}
                w={width * 0.28}
                borderWidth={images[index] ? 0 : 1}
                position="relative"
              >
                {images[index] ? (
                  <>
                    <Image
                      source={{ uri: images[index] }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                    />
                    <Pressable
                      onPress={() => removeImage(index)}
                      position="absolute"
                      bottom={5}
                      right={5}
                      p={3}
                      rounded={"$full"}
                      bg="$white"
                    >
                      <Entypo name="cross" size={20} color={Colors.primary} />
                    </Pressable>
                  </>
                ) : (
                  <AntDesign name="plus" size={24} color="grey" />
                )}
              </Pressable>
            );
          })}
        </Box>
      ))}
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent alignItems="center" h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={() => pickImage(selectedIndex as number)}>
            <ActionsheetItemText>Choose a Photo</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default EditImages;
