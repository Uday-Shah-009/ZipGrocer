import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthState } from "../Services/store/AuthStore";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const logout = AuthState.getState().logout;
  const logoutFn = async() => {
    console.log("called")
    await logout();
  }
  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="flex-1 bg-green-600 items-center justify-center">
        <Button title="Logout" color="#000" onPress={logoutFn} />
      </View>
    </SafeAreaView>
  );
};

export default Logout;
