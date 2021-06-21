import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Divider from 'react-native-divider';

const Home = ({ navigation }) => {
  const goToCreateNewCI = () => navigation.navigate('CreateNewCI');
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={goToCreateNewCI}
        style={styles.createNewCIButton}
      >
        <Text style={styles.createNewCIButtonText}>New Contract Instruction</Text>
     </TouchableOpacity>
     <Divider></Divider>
     <Text>TODO: LIST OF EXISTING CIs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  createNewCIButton: {
    flex: 0.075,
    backgroundColor: "#F2994A",
    width: 350,
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
  createNewCIButtonText : {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
});

export default Home;
