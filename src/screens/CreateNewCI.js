import React from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons";
import Divider from 'react-native-divider';

const CreateNewCI = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.ciNum}>This CI will be added as CI #</Text>
      <Divider></Divider>
      <TextInput
        style={styles.inputField}
        placeholder="CI Name"
      />
      <Text style={styles.todo}>TODO: ADD RECIPIENT DROPDOWN</Text>
      <TextInput
        style={styles.largeInputField}
        placeholder="Description"
        multiline={true}
      />
      <Text />
      <TextInput
        style={styles.largeInputField}
        placeholder="Reason for Change"
        multiline={true}
      />
      <Text />
      <Text style={styles.ciNum}>Areas Affected</Text>
      <Text />
      <Text style={styles.span}>
          <TouchableOpacity
            // onPress={goToCreateNewCI}
            style={styles.toggleButton}
          >
          <Text style={styles.toggleButtonText}>For Construction</Text>
         </TouchableOpacity>
         <TouchableOpacity
           // onPress={goToCreateNewCI}
           style={styles.toggleButton}
         >
         <Text style={styles.toggleButtonText}>Programme Implication</Text>
         </TouchableOpacity>

         <TouchableOpacity
            // onPress={goToCreateNewCI}
            style={styles.toggleButton}
         >
         <Text style={styles.toggleButtonText}>Cost Implication</Text>
         </TouchableOpacity>
         <TouchableOpacity
           // onPress={goToCreateNewCI}
           style={styles.toggleButton}
         >
         <Text style={styles.toggleButtonText}>Abortive Work</Text>
         </TouchableOpacity>
      </Text>
      <Text />
      <Text style={styles.span}>
        <Text style={styles.ciNum}>Add Files</Text>
      </Text>
      <Text />
      <Text style={styles.todo}>TODO: ADD FILE UPLOAD BUTTONS</Text>
      <Text />
      <TouchableOpacity
        // onPress={goToCreateNewCI}
        style={styles.submitButton}
      >
      <Text style={styles.submitButtonText}>Submit</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
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
  largeInputField: {
    flex: 0.2,
    width: 350,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    paddingLeft: 8,
    fontSize: 20,
  },
  ciNum: {
    fontStyle: "italic",
    fontSize: 20,
    paddingTop: 10,
  },
  toggleButton: {
    flex: 1,
    width: 160,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
  },
  toggleButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#6200EE",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  span: {
    justifyContent: "center",
    flexDirection: "row",
  },
  submitButton: {
    height: 40,
    width: 160,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    backgroundColor: "#6200EE",
  },
  submitButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: 7.5,
  },
  todo: {
    color: "red",
    backgroundColor: "yellow",
  },
},
);

export default CreateNewCI;
