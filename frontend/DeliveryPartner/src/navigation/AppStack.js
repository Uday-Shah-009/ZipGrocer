import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Logout from '../components/Logut';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        component={Logout}
        name='Logout'
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  )
}

export default AppStack

