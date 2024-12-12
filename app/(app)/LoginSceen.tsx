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
} from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { routeToScreen } from "expo-router/build/useScreens";
 // Removed FontAwesome

const countryCodes = [
  { code: "+62", name: "IDN", length: 10 },

  { code: "+1", name: "USA", length: 10 },
  { code: "+91", name: "IND", length: 10 },
  { code: "+44", name: "UK", length: 10 },
  // Add more country codes with specific lengths as needed
];

const LoginScreen = () => {
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

    if (!phone) {
      Alert.alert("Error", "Please enter your phone number.");
      return;
    }

    if (phone.length !== selectedCountry.length) {
      Alert.alert(
        "Error",
        `Please enter a valid ${selectedCountry.length}-digit phone number.`
      );
      return;
    }

    Alert.alert("Success", "Successfully logged in!", [
      { text: "OK", onPress: () => router.push("/NewProfileScreen") },
    ]);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleBack}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/Lcon App.png")}
          style={styles.topImage}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Country Selector */}
        <View style={styles.inputGroup}>
         
          <View>
            <Text style={styles.label}>Country</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.selectorText}>{countryCode}</Text>
        </TouchableOpacity>

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
          <View>
            <Text style={styles.label}>Phone Number</Text>
           
          </View>
          
        </View>
        <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          
        />
        <Feather name="smartphone" size={20} color="#888" style={styles.inputIcon} />
        </View>
        <Text style={styles.helperText}>
          We need your phone number {"\n"} to get Signed in.
        </Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={()=>router.navigate('/NewProfileScreen')}>
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
    
    
  },
  inputGroup: {
    position: "relative",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    paddingRight: 40, // Add padding to make space for the icon
    fontSize: 16,
  },
  inputIcon: {
    position: "absolute",
    right: 10,
    top: "35%",
    transform: [{ translateY: -10 }], // Center the icon vertically
  },
 
  
  helperText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
    textAlign: "center",
  },
  
  selector: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  selectorText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
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

export default LoginScreen;
