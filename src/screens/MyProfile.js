import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from "react-native";
import Divider from "react-native-divider";
import {IconButton, Colors, Icon } from "react-native-paper";

// Database package
import { initializeParse, useParseQuery } from  '@parse/react-native';

const MyProfile = async () => {

  const parseQuery = new Parse.Query('User');
  const {
    isLive,
    isLoading,
    isSyncing,
    results,
    count,
    error,
    reload
  } = useParseQuery(parseQuery);

  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);

  try {
        //Query the SoccerPlayers object using the objectId you've copied
        const user = await query.get("BzHuAGNNel");
        //access each object propertie using the get method
        const username = user.get("username");
        const firstName = user.get("firstName");
        const lastName = user.get("lastName");
        const email = user.get("email");
        const password = user.get("password");
        const company = user.get("company");
      } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
      }

  return (
    <View style={styles.center}>
      <Text />
      <TouchableOpacity
        // onPress={goToCreateNewCI}
        style={styles.editProfileButton}
      >
        <Text style={styles.editProfileButtonText}>Edit</Text>
     </TouchableOpacity>
      <Image
        style={styles.profilePicture}
        source={require("../assets/profilePicturePlaceholder.png")}
      />
      <Text />
      <Text style={styles.todo}>{firstName} {lastName}</Text>
      <Text style={styles.todo}>TODO: Get user job from DB</Text>
      <Divider></Divider>
      <Text style={styles.todo}>TODO: Get user email address from DB</Text>
      <Text style={styles.todo}>TODO: Get user company from DB</Text>
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
});

export default MyProfile;
