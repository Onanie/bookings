import React from "react";
import {View, Text} from "react-native";
import styles from "./componentsStyles";
import { Ionicons } from "@expo/vector-icons";

const UserDetails = ({user}:any) =>{
    return(
        <View style={styles.userDetailsContainer}>
            <Text style={styles.infoText}> 
            <Ionicons name="call-outline" size={48} color="green" />
            {user.phone}
            </Text>
            <Text style={styles.infoText}>
            <Ionicons name="mail-outline" size={48} color="green" />
                {user.email}</Text>
            <Text style={styles.infoText}>
            <Ionicons name="location-outline" size={48} color="green" />
                {user.address}</Text>
            <Text style={styles.infoText}>
            <Ionicons style={styles.icon} name="calendar-outline"  />
                {user.member_since}</Text>
        </View>
    )
}
export default UserDetails;