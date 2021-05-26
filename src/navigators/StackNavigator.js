import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CreateNewCI from "../screens/CreateNewCI";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={CreateNewCI} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };