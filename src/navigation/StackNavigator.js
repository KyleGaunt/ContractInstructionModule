import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CreateNewCI from "../screens/CreateNewCI";
import MyProfile from "../screens/MyProfile";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CreateNewCI" component={CreateNewCI} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>
    );
}

const SecondaryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="CreateNewCI" component={CreateNewCI} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, SecondaryStackNavigator };
