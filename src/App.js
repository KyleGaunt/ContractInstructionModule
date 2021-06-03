import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/StackNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

import { initializeParse } from  '@parse/react-native';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;


initializeParse(
  'https://parseapi.back4app.com/',
  '5f4gu0W7aeFq8zXeNz4wsmgUjrlr0Ucbg29C0i1U',
  '07Lnw2wzlxDJBT7fo1KhN9acWdjxVMMfRpDBDci7'
);
