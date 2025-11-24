import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View, Animated, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "./app/navigation/BottomTabs";
import SplashScreen from "./app/screens/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}