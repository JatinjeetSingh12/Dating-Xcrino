import { Colors } from "@/constants/Colors";
import { APP_NAME } from "@/constants/config";
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
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);

  return (
    <View flex={1} backgroundColor={Colors.background}>
      <Box w={"92%"} gap={10} mt={20} alignSelf="center">
        <Text mx={6} color="$secondary400" fontSize={15} fontFamily="Light">
          Account Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text mx={6} color="$black" fontSize={17} fontFamily="Regular">
            Delete Your Account
          </Text>
        </TouchableOpacity>
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
            <Text fontFamily="Bold" color="$black">
              We're sorry to see you leave.Do you mind telling us why?
            </Text>
          </ModalHeader>
          <ModalBody>
            <Box gap={20} mt={15}>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text fontFamily="Regular" color="$black">
                  I found my lover on {APP_NAME}!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text fontFamily="Regular" color="$black">
                  I found my lover elsewhere
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text fontFamily="Regular" color="$black">
                  other
                </Text>
              </TouchableOpacity>
            </Box>
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
    </View>
  );
};

export default Page;
