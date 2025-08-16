import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthState } from "../Services/store/AuthStore";
import SplashScreen from "../screens/SplashScreen/SplashScreen";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isAuth = AuthState((state) => state.isAuth);
  const hasHydrated = AuthState.persist.hasHydrated();

  if (!hasHydrated) {
    return <SplashScreen />;
  }

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
