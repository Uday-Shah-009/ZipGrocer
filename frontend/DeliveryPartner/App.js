import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./src/global.css";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';

export default function App() {
  return (
     <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
       <LoginScreen />
      </SafeAreaView>
     </SafeAreaProvider>
  );
}

