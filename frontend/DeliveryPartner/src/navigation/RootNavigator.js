import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedin = false;
  return (
      <Stack.Navigator>
        {isLoggedin ? (
          <Stack.Screen
            name="app"
            component={AppStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
  );
};

export default RootNavigator;
