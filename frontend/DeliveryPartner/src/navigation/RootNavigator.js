import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthState } from "../Services/store/AuthStore";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isAuth} = AuthState();
  return (
      <Stack.Navigator>
        {isAuth ? (
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
