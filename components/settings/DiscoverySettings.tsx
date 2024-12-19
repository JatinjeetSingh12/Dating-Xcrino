import {
  Text,
  Box,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalFooter,
  Pressable,
} from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import React, { useMemo, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const DiscoverySettings = () => {
  const [value, setValue] = useState(30);

  const [age, setAge] = useState(22);

  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Men Only",
        value: "Men Only",
      },
      {
        id: "2",
        label: "Women Only",
        value: "Women Only",
      },
      {
        id: "3",
        label: "Both Men & Women",
        value: "Both Men & Women",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<any>();

  return (
    <>
      <Box w={"92%"} alignSelf="center">
        <Text
        my={10}
          color={Colors.primary}
          fontFamily="SemiBold"
          fontSize={15}
        >
          Discovery Settings
        </Text>
        <Box>
          <HStack my={10} alignItems="center" justifyContent="space-between">
            <Text color="$black" fontFamily="Regular">
              Distance
            </Text>
            <Text fontFamily="Bold" color={Colors.primary}>
              {value}km
            </Text>
          </HStack>
          <HStack mt={15} mb={8} alignItems="center">
            <FontAwesome name="bicycle" size={18} color="grey" />
            <Slider
              size={"sm"}
              mx={16}
              flex={1}
              onChange={(value) => setValue(value)}
              value={value}
              minValue={1}
              maxValue={100}
              orientation="horizontal"
              isDisabled={false}
              isReversed={false}
            >
              <SliderTrack>
                <SliderFilledTrack backgroundColor={Colors.primary} />
              </SliderTrack>
              <SliderThumb backgroundColor={Colors.primary} />
            </Slider>
            <Ionicons name="airplane-outline" size={18} color="grey" />
          </HStack>
        </Box>
        <HStack my={30} alignItems="center" justifyContent="space-between">
          <Text color="$black" fontFamily="Regular">
            Show me
          </Text>
          <TouchableOpacity
            // onPress={() => {
            //   setShowModal(true);
            // }}
          >
            <Text fontFamily="Bold" color={Colors.primary}>
              Women only
            </Text>
          </TouchableOpacity>
        </HStack>
        <Box mb={10} >
          <HStack alignItems="center" justifyContent="space-between">
            <Text color="$black" fontFamily="Regular">
              Age
            </Text>
            <Text fontFamily="Bold" color={Colors.primary}>
              18-50+
            </Text>
          </HStack>
        </Box>
      </Box>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading fontFamily="Bold" size="md">
              Show Me
            </Heading>
          </ModalHeader>
          <ModalBody>
            <RadioGroup
              containerStyle={{ alignSelf: "flex-start" }}
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </ModalBody>
          <ModalFooter>
            <Pressable
              onPress={() => {
                setShowModal(false);
              }}
              px={8}
              py={3}
              $active-backgroundColor="$blueGray200"
            >
              <Text fontFamily="Medium" color={Colors.primary}>
                Cancel
              </Text>
            </Pressable>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DiscoverySettings;
