// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useNavigation } from "@react-navigation/native";
// import { router } from "expo-router";

// const CallScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "white",
//           width: "95%",
//           alignSelf: "center",
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "100%",
//             marginVertical: 20,
//           }}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={28} color="black" />
//           </TouchableOpacity>
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>Call</Text>
//           <View />
//         </View>

//         <View style={[styles.profileContainer]}>
//         <View style={styles.profileWrapper}>
//           <Image
//             source={{ uri: 'https://st4.depositphotos.com/13193658/27067/i/450/depositphotos_270674086-stock-photo-beautiful-smiling-teenage-girl-looking.jpg' }}
//             style={styles.profileImage}
//           />
//           <View style={styles.onlineIndicator} />
//         </View>
//         <Text style={styles.profileName}>Patricia</Text>
//         <Text style={styles.callingStatus}>Calling...</Text>
//       </View>
//       <View style={styles.controls}>
//         <TouchableOpacity style={styles.controlButton}>
//           <Ionicons name="mic-off" size={30} color="grey" />
//         </TouchableOpacity>

//         {/* Navigate to Video Call Screen */}
//         <TouchableOpacity
//           style={styles.controlButton}
//           onPress={() => router.navigate("/(app)/VideoCallScreen")} // Navigate to Video Call Screen
//         >
//           <Ionicons name="videocam" size={30} color="grey" />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.controlButton}>
//           <Ionicons name="volume-high" size={30} color="grey" />
//         </TouchableOpacity>
//       </View>

//       {/* New Call Button */}
//       <TouchableOpacity style={styles.newControlButton}>
//         <Ionicons name="call" size={30} color="white" />
//       </TouchableOpacity>
//       </View>

//       {/* Profile Picture and Status */}

//       {/* Call Controls */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     left: 145,
//     justifyContent: "center",
//     top: 40,
//   },
//   profileContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:100
//   },
//   profileWrapper: {
//     position: "relative",
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   onlineIndicator: {
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: "green",
//     borderWidth: 2,
//     borderColor: "white",
//   },
//   profileName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   callingStatus: {
//     fontSize: 18,
//     color: "gray",
//     marginTop: 5,
//   },
//   controls: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "80%",
//     alignSelf:'center'
//   },
//   controlButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#FFFFFF",
//     justifyContent: "center",
//     alignItems: "center",

//   },
//   newControlButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#EF4765",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf:'center',
//     marginTop:100
//   },
// });

// export default CallScreen;


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const CallScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Call</Text>
        <View />
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <Image
            source={{
              uri: "https://st4.depositphotos.com/13193658/27067/i/450/depositphotos_270674086-stock-photo-beautiful-smiling-teenage-girl-looking.jpg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.onlineIndicator} />
        </View>
        <Text style={styles.profileName}>Patricia</Text>
        <Text style={styles.callingStatus}>Calling...</Text>
      </View>

      {/* Call Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={30} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => router.navigate("/(app)/VideoCallScreen")}
        >
          <Ionicons name="videocam" size={30} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="volume-high" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* New Call Button */}
      <TouchableOpacity style={styles.newControlButton}>
        <Ionicons name="call" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.1,
  },
  profileWrapper: {
    position: "relative",
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    borderWidth: 2,
    borderColor: "#F1F1F1",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "white",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  callingStatus: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: height * 0.1,
    width: "100%",
    paddingHorizontal: 40,
  },
  controlButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // For Android shadow
  },
  newControlButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#EF4765",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height * 0.05,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
});

export default CallScreen;
