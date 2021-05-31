import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, SecondaryStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="My Profile"
        component={SecondaryStackNavigator}
        options={{
          title: "My Profile",
          headerStyle: {
            backgroundColor: '#21293D'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
        />
      <Drawer.Screen name="Sign Out" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
