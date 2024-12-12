import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link, router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/Lcon App.png")}
          style={styles.topText}
        />
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.image}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.headerText}>Welcome To</Text>
      <Text style={styles.headerText}>Xcrino</Text>
      <Text style={styles.tagline}>Match. Chat. Meet.</Text>

      {/* Buttons at the Bottom */}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => router.navigate("/LoginSceen")}
          style={styles.button}
        >
          <Feather name="smartphone" size={24} />
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </Pressable>
        <Link
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPODtCX2ZdKd4PLhoGgR4UmREGCWaitIAA_A&s"
          style={styles.buttonOutline}
        >
          <Entypo name="facebook" size={24} color="red" />
          <Text style={styles.buttonOutlineText}>Continue with Facebook</Text>
        </Link>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account ?</Text>
        <Link
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPODtCX2ZdKd4PLhoGgR4UmREGCWaitIAA_A&sw"
          style={styles.footerLink}
        >
          <Text style={styles.footerLinkText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    bottom: 80,
    right: 110,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 200,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonOutline: {
    borderColor: "red",
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutlineText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  footerText: {
    fontSize: 14,
  },
  footerLink: {
    marginTop: 5,
    bottom: 4,
  },
  footerLinkText: {
    color: "red",
    fontWeight: "bold",
    bottom: 8,
    fontSize: 15,
  },
});

export default Index;
