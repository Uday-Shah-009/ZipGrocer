import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./src/global.css";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SignUpScreen from './src/screens/Auth/SignUpScreen';

export default function App() {
  return (
     <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
       <SignUpScreen/>
      </SafeAreaView>
     </SafeAreaProvider>
  );
}

