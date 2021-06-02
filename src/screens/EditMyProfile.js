import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, TextInput } from "react-native";
import Divider from "react-native-divider";
import {IconButton, Colors, Icon } from "react-native-paper";

const EditMyProfile = () => {
  return (
    <View style={styles.center}>
      <Text />
      <Image
        style={styles.profilePicture}
        source={require("../assets/profilePicturePlaceholder.png")}
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="First Name"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="Last Name"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="Email Address"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="Company"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="Current Password"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="New Password"
      />
      <Text />
      <TextInput
        style={styles.inputField}
        placeholder="Confirm New Password"
      />
      <Text />
      <TouchableOpacity
        // onPress={goToCreateNewCI}
        style={styles.updateButton}
      >
      <Text style={styles.updateButtonText}>Update</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    textAlign: "center",
  },
  todo: {
    color: "red",
    backgroundColor: "yellow",
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  editProfileButton: {
      flex: 0.075,
      backgroundColor: "#21293D",
      width: 100,
      height:50,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  editProfileButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
    textTransform: "uppercase",
  },
  inputField: {
    flex: 0.06,
    width: 350,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    paddingLeft: 8,
    fontSize: 20,
  },
  updateButton: {
    height: 40,
    width: 160,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    backgroundColor: "#F2994A",
  },
  updateButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 7.5,
  },
});

export default EditMyProfile;
