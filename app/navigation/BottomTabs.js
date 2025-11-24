import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import StackNavigator from "./StackNavigator";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? "#00D9A5" : "#4A5568"}
              />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          let title;
          if (route.name === "HomeTab") title = "Home";
          else if (route.name === "Search") title = "Search";
          else if (route.name === "Cart") title = "Cart";
          else if (route.name === "Profile") title = "Profile";

          return (
            <Text style={[styles.tabBarLabel, focused && styles.tabBarLabelActive]}>
              {title}
            </Text>
          );
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1A1F36',
    borderTopWidth: 0,
    height: 80,
    paddingTop: 12,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  iconContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  iconContainerActive: {
    backgroundColor: 'transparent',
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4A5568',
    marginTop: 4,
  },
  tabBarLabelActive: {
    color: '#00D9A5',
  },
});