import { Colors } from "@/constants/Colors";
import {
  Text,
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Pressable,
  View,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import moment from "moment";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dob, setDob] = useState("");

  const ref = React.useRef(null);
  const [name, setName] = useState("Jane Forde");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDob(date);
    hideDatePicker();
  };

  const getMinimumAgeDate = () => {
    const today = new Date();
    const minimumAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return minimumAgeDate;
  };

  return (
    <View flex={1} backgroundColor={Colors.background}>
      <Box w={"92%"} gap={20} mt={20} alignSelf="center">
        <Box gap={1} mx={6}>
          <Text color="$black" fontSize={18} fontFamily="Regular">
            Gender
          </Text>
          <Text color="$secondary400" fontSize={15} fontFamily="Light">
            Man
          </Text>
        </Box>
        <Pressable
          onPress={() => {
            setShowModal(true);
          }}
          gap={1}
          mx={6}
        >
          <Text color="$black" fontSize={18} fontFamily="Regular">
            Full Name
          </Text>
          <Text color="$secondary400" fontSize={15} fontFamily="Light">
            {name}
          </Text>
        </Pressable>
        <Pressable onPress={showDatePicker} gap={1} mx={6}>
          <Text color="$black" fontSize={18} fontFamily="Regular">
            Birthday
          </Text>
          <Text color="$secondary400" fontSize={15} fontFamily="Light">
            {dob?moment(dob).format("l"):"08/08/2002"}
          </Text>
        </Pressable>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            maximumDate={getMinimumAgeDate()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Input mr={5}>
              <InputField
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
            </Input>
            {name.length === 0 && (
              <Text fontFamily="Medium" color={Colors.primary} mt={2}>
                Name is empty
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Pressable
              onPress={() => {
                setShowModal(false);
                setName("William Forde");
              }}
              px={8}
              py={3}
              $active-backgroundColor="$blueGray200"
            >
              <Text fontFamily="Medium" color={Colors.primary}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                name.length === 0 ? null : setShowModal(false);
              }}
              disabled={name.length === 0}
              px={8}
              py={3}
              $active-backgroundColor="$blueGray200"
            >
              <Text
                opacity={name.length === 0 ? 0.4 : 1}
                fontFamily="Medium"
                color={Colors.primary}
              >
                Ok
              </Text>
            </Pressable>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
};

export default Page;
