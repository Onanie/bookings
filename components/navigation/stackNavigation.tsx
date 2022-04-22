import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import Home from "../../screens/home";
import Profile from "../../screens/profile";
import Appointments from "../../screens/appointments";
import Support from "../../screens/support";
import TabsNavigation from "./tabsNavigation";
import AppointmentDetails from "../../screens/appointmentDetails"
//import DrawerNavigation from "./drawerNavigation";

const StackNavigation = () =>{
    const Stack = createStackNavigator();
    return(
<NavigationContainer>
    <Stack.Navigator
     screenOptions={{
        headerShown: false,
        
      }}
    >
        <Stack.Screen name="home" component={TabsNavigation}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="appointments" component={Appointments}/>
        <Stack.Screen name="support" component={Support}/>
        <Stack.Screen name="details" component={AppointmentDetails}/>
    </Stack.Navigator>
</NavigationContainer>
    )
}
export default StackNavigation;


