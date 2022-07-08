import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Appearance } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import DashboardScreen from "../screens/DashboardScreen";
import FlowScreen from "../screens/FlowScreen";
import NewsScreen from "../screens/NewsScreen";
import SearchScreen from "../screens/SearchScreen";
import AccountNavigator from "./AccountNavigator";
import useTheme from "../hooks/useTheme";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const theme = useTheme();

  const renderIconColor = () => {
    return theme === "light" ? "#000" : "#FFF";
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
          <Ionicons
            name="home-outline"
            size={size}
            color={focused ? "#ED203D" : renderIconColor()}
          />
        ) }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
          <Ionicons
            name="search-outline"
            size={size}
            color={focused ? "#ED203D" : renderIconColor()}
          />
        ) }}
      />
      <Tab.Screen
        name="Flow"
        component={FlowScreen}
        options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ focused, size }) => (
          <Ionicons
            name="pulse-outline"
            size={size}
            color={focused ? "#ED203D" : renderIconColor()}
          />
        ) }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{ headerShown: false, tabBarShowLabel: false, 
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="globe-outline"
              size={size}
              color={focused ? "#ED203D" : renderIconColor()}
            />
          ) }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={focused ? "#ED203D" : renderIconColor()}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
