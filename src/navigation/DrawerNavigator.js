import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, SecondaryStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="MyProfile" component={SecondaryStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
