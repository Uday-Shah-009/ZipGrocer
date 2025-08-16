import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import TabNavigator from '../screens/App/TabNavigator';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        component={TabNavigator}
        name='AppNavigator'
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  )
}

export default AppStack

