import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
  Image,
  StatusBar,
} from "react-native"; // Correct import for StatusBar
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const countryCodes = [
  { code: "+62", name: "IDN", length: 10 },
  { code: "+1", name: "USA", length: 10 },
  { code: "+91", name: "IND", length: 10 },
  { code: "+44", name: "UK", length: 10 },
];

const LoginScreens = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleCountrySelect = (code:string) => {
    setCountryCode(code);
    setModalVisible(false);
  };

  const handleContinue = () => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    if (!selectedCountry) {
      Alert.alert("Error", "Please select a valid country code.");
      return;
    }

    

    Alert.alert("Success", "Successfully logged in!", [
      { text: "OK", onPress: () => router.push("/OtpScreen") },
    ]);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleBack}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/con-App.png")}
          style={styles.topImage}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Country Selector */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Country</Text>
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../../assets/images/Flag_Icon.png")}
              style={styles.flagIcon}
            />
            <Text style={styles.selectorText}>{countryCode}</Text>
            <Feather
              name="chevron-down"
              size={20}
              color="#888"
              style={styles.inputIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Country Code Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={countryCodes}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => handleCountrySelect(item.code)}
                  >
                    <Text>
                      {item.name} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Phone Number Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <Feather
              name="smartphone"
              size={20}
              color="#888"
              style={styles.inputIcon}
            />
          </View>
        </View>
        <Text style={styles.helperText}>
          We need your phone number {"\n"} to get Signed in.
        </Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={()=>router.navigate('/OtpScreen')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
    top: 30,
  },
  topImage: {
    width: 100,
    height: 20,
  },
  formContainer: {
    justifyContent: "flex-start",
    flex: 1,
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "gray",
  },
  inputGroup: {
    position: "relative",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingRight: 40, // Add padding to make space for the icon
  },
  inputIcon: {
    marginLeft: 10, // Add margin to the left to ensure proper spacing
  },
  flagIcon: {
    width: 33,
    height: 24,
    marginRight: 10,
  },
  helperText: {
    fontSize: 17,
    color: "hsla(0, 0%, 37%, 1)",
    marginBottom: 40,
    textAlign: "center",
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    position: "relative",
  },
  selectorText: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: "#EF4765",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginScreens;
