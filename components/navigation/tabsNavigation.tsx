import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Appointments from "../../screens/appointments";
import Home from "../../screens/home";
import Profile from "../../screens/profile";
import Support from "../../screens/support";

const TabsNavigation = () =>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
         tabBarActiveTintColor:"green",
         tabBarInactiveTintColor:"gray",
         headerShown:false,

        }}
        >
          <Tab.Screen
            name="Homerrnn"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" size={28} color="green" />
              ),
            }}
          />
  
          <Tab.Screen
            name="Appointments"
            component={Appointments}
            options={{
              tabBarLabel: 'Appointments',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="calendar-outline" size={28} color="green" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" size={28} color="green" />
              ),
            }}
          />

          <Tab.Screen
            name="Support"
            component={Support}
            options={{
              tabBarLabel: 'Support',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" size={28} color="green" />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }
export default TabsNavigation;