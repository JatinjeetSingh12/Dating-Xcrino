import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Dimensions,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Input from "@/Components/custom/Input";

const NewProfileScreen = () => {
  const [name, setName] = useState("Brian Immanuel");
  const [birthday, setBirthday] = useState("05/MM/YYYY");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("Jakarta, Indonesia");
  const [job, setJob] = useState("Graphic Designer");
  const [companyName, setCompanyName] = useState("Design Center");
  const [collegeName, setCollegeName] = useState("Design School Int");
  const [description, setDescription] = useState("HI HGHRFD");

  const { height } = Dimensions.get("window");

  const router = useRouter();

  const handleSubmit = () => {
    // if (
    //   !name ||
    //   !birthday ||
    //   !gender ||
    //   !location ||
    //   !job ||
    //   !companyName ||
    //   !collegeName ||
    //   !description
    // ) {
    //   Alert.alert("Error", "All fields are required!");
    //   return;
    // }
    router.navigate("/WelcomeScreen"); // Replace with your next screen path
  };

  const [username, setUserName] = useState("");

  return (
    <>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      <ScrollView style={styles.scrollContainer}>
        <Image
          source={require("@/assets/images/profile-image.png")}
          style={[styles.background, { height: height * 0.3 }]}
        />
        <View style={styles.formContainer}>
          <Input
            Icon={() => (
              <AntDesign
                name="user"
                size={24}
                style={{ marginHorizontal: 10 }}
                color="black"
              />
            )}
            placeHolder="Enter a name"
            setValue={setUserName}
            value={username}
            label="Name"
          />

          <Input
            Icon={() => (
              <AntDesign
                style={{ marginHorizontal: 10 }}
                name="calendar"
                size={20}
                color="black"
              />
            )}
            placeHolder="DD/MM/YYYY"
            setValue={setUserName}
            value={username}
            label="Birthday"
          />

          <Input
            Icon={() => (
              <AntDesign
                name="user"
                size={24}
                style={{ marginHorizontal: 10 }}
                color="black"
              />
            )}
            placeHolder="Enter a name"
            setValue={setUserName}
            value={username}
            label="Name"
          />

          <TextInput
            style={styles.input}
            value={birthday}
            onChangeText={setBirthday}
            placeholder="Birthday"
            placeholderTextColor="#aaa"
          />
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "Male" && styles.selectedGender,
              ]}
              onPress={() => setGender("Male")}
            >
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "Female" && styles.selectedGender,
              ]}
              onPress={() => setGender("Female")}
            >
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Location"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={job}
            onChangeText={setJob}
            placeholder="Job"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={setCompanyName}
            placeholder="Company Name"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            value={collegeName}
            onChangeText={setCollegeName}
            placeholder="College Name"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            placeholderTextColor="#aaa"
            multiline
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* <FlatList /> */}
        {/* <ImageBackground
        source={require('../assets/images/Add image.png')} // Adjust path to the background image in assets folder
        style={styles.background}
      >
       
      </ImageBackground> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  background: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "black",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: "red",
  },
  genderText: {
    color: "black",
  },
  submitButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewProfileScreen;
