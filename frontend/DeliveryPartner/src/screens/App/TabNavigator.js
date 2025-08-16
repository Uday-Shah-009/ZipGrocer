import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Orders from "./orders";
import Profile from "./Profile";
import Earnings from "./Earnings";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tab.Navigator
      initialRouteName="Orders"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "green",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarStyle: { height: 65, padding: 10, borderRadius: 10 },
        }}
      >
        <Tab.Screen
          component={Orders}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="th-list" size={24} color={color} />
            ),
          }}
          name="Orders"
        />
        <Tab.Screen
          component={Earnings}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="dollar" size={24} color={color} />
            ),
          }}
          name="Earnings"
        />
        <Tab.Screen
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user-circle" size={24} color={color} />
            ),
          }}
          name="Profile"
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
