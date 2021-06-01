import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, SecondaryStackNavigator } from "./StackNavigator";

import Home from "../screens/Home";
import CreateNewCI from "../screens/CreateNewCI";
import MyProfile from "../screens/MyProfile";
import EditMyProfile from "../screens/EditMyProfile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          title: "Home Screen",
          headerStyle: {
            backgroundColor: '#21293D'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />
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
      <Drawer.Screen name="Sign Out" component={SecondaryStackNavigator} />
      <Drawer.Screen name="Edit Profile" component={EditMyProfile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
