import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#fff", height: 70, borderTopWidth: 0, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 10 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTab") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Search") iconName = focused ? "search" : "search-outline";
          else if (route.name === "Cart") iconName = focused ? "cart" : "cart-outline";
          else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

          return <Ionicons name={iconName} size={24} color={focused ? "#00cc66" : "#777"} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}