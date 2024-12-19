import { Colors } from "@/constants/Colors";
import {
  Text,
  Box,
  ScrollView,
  Input,
  InputField,
  HStack,
  Pressable,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const EducationLevelData = [
  {
    id: 1,
    name: "Elementary school",
  },
  {
    id: 2,
    name: "Middle school",
  },
  {
    id: 3,
    name: "High school",
  },
  {
    id: 4,
    name: "Vocational school",
  },
  {
    id: 5,
    name: "Bachelor's degree",
  },
  {
    id: 6,
    name: "Master's degree",
  },
  {
    id: 7,
    name: "Doctoral degree",
  },
];

const Page = () => {
  const [nickname, setNickname] = useState("");

  const [dob, setDob] = useState("");

  const [gender, setGender] = useState<"MAN" | "WOMAN">("MAN");

  const [education, setEducation] = useState("");

  const [school, setSchool] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);

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

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mb={10} gap={30} mt={30} w={"88%"} alignSelf="center">
          <Text fontSize={26} color="$black" fontFamily="Bold">
            Profile
          </Text>
          <Box gap={12}>
            <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
              Nickname
            </Text>
            <Input
              h={60}
              borderColor="$secondary200"
              borderWidth={1.5}
              rounded={"$xl"}
            >
              <InputField
                cursorColor={Colors.primary}
                placeholder="Enter your nickname"
                color="$black"
                fontFamily="Bold"
                value={nickname}
                onChangeText={(text) => {
                  setNickname(text);
                }}
              />
            </Input>
          </Box>
          <Pressable onPress={showDatePicker} gap={12}>
            <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
              Your Birthday(Once set, cannot be changed)
            </Text>
            <Input
              h={60}
              borderColor="$secondary200"
              borderWidth={1.5}
              rounded={"$xl"}
            >
              <InputField
                onPress={showDatePicker}
                editable={false}
                cursorColor={Colors.primary}
                placeholder="Enter your Birthday date"
                color="$black"
                fontFamily="Bold"
                value={dob ? moment(dob).format("l") : ""}
              />
            </Input>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            maximumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Box gap={12}>
            <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
              Gender
            </Text>
            <HStack justifyContent="space-between">
              <Pressable
                position="relative"
                onPress={() => {
                  setGender("MAN");
                }}
                borderColor={
                  gender === "MAN" ? Colors.primary : "$secondary300"
                }
                rounded={"$xl"}
                borderWidth={gender === "MAN" ? 2 : 1}
                w={"45%"}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  mx={10}
                  my={14}
                  fontSize={18}
                  color="$black"
                  fontFamily={"Bold"}
                >
                  MAN
                </Text>
                {gender === "MAN" && (
                  <Box
                    p={5}
                    top={-12}
                    right={-12}
                    position="absolute"
                    rounded={"$full"}
                    borderWidth={3}
                    borderColor={Colors.background}
                    backgroundColor={Colors.primary}
                  >
                    <AntDesign name="check" size={14} color="white" />
                  </Box>
                )}
              </Pressable>
              <Pressable
                onPress={() => {
                  setGender("WOMAN");
                }}
                borderColor={
                  gender === "WOMAN" ? Colors.primary : "$secondary300"
                }
                borderWidth={gender === "WOMAN" ? 2 : 1}
                rounded={"$xl"}
                w={"45%"}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  mx={10}
                  my={14}
                  fontSize={18}
                  color="$black"
                  fontFamily={"Bold"}
                >
                  WOMAN
                </Text>
                {gender === "WOMAN" && (
                  <Box
                    p={5}
                    top={-12}
                    right={-12}
                    position="absolute"
                    rounded={"$full"}
                    borderWidth={3}
                    borderColor={Colors.background}
                    backgroundColor={Colors.primary}
                  >
                    <AntDesign name="check" size={14} color="white" />
                  </Box>
                )}
              </Pressable>
            </HStack>
          </Box>
          <Pressable onPress={()=>{setShowModal(true)}} gap={12}>
            <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
              Education Level
            </Text>
            <Input
              h={60}
              borderColor="$secondary200"
              borderWidth={1.5}
              rounded={"$xl"}
            >
              <InputField
                onPress={() =>{setShowModal(true)}}
                editable={false}
                cursorColor={Colors.primary}
                placeholder="Education Level"
                color="$black"
                fontFamily="Bold"
                value={education}
              />
            </Input>
          </Pressable>
          {education.includes("degree") && (
            <Box gap={12}>
              <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
                School
              </Text>
              <Input
                h={60}
                borderColor="$secondary200"
                borderWidth={1.5}
                rounded={"$xl"}
              >
                <InputField
                  cursorColor={Colors.primary}
                  placeholder="School"
                  color="$black"
                  fontFamily="Bold"
                  value={school}
                  onChangeText={(text) => {
                    setSchool(text);
                  }}
                />
              </Input>
            </Box>
          )}

          <Box gap={12}>
            <Text fontSize={12} fontFamily={"Bold"} color="$secondary400">
              Choose a password
            </Text>
            <Input
              h={60}
              borderColor="$secondary200"
              borderWidth={1.5}
              rounded={"$xl"}
            >
              <InputField
                cursorColor={Colors.primary}
                placeholder="Set password (6-20 digits)"
                color="$black"
                fontFamily="Bold"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </Input>
          </Box>

          <Button
            onPress={() => {
              router.navigate("/(app)/AddPhotoScreen");
            }}
            h={60}
            $active-opacity={0.7}
            rounded={"$xl"}
            mt={20}
            w={"100%"}
            bg={Colors.primary}
          >
            <ButtonText fontFamily="Bold" fontSize={16}>
              Continue
            </ButtonText>
          </Button>
        </Box>
      </ScrollView>

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
            <Heading size="lg">Education Level</Heading>
          </ModalHeader>
          <ModalBody>
            {EducationLevelData.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  setEducation(item.name);
                  setShowModal(false);
                }}
                style={{ marginVertical: 10 }}
                key={item.id}
              >
                <Text fontFamily="Medium">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
};

export default Page;
