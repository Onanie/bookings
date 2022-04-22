import React from "react";
import {View, Image,Text} from "react-native";
import Carousel from "../components/carousel";
import HomeButtons from "../components/homeButtons";
import NavBar from "../components/navBar";
import styles from "./styles";

export default function Home(){
    return(
        <View style={styles.homeContainer}>
          <View style={{ flex:3}}>
          <NavBar/>
          <Image source={require("../assets/check.jpg") } style={styles.image}/>
          </View>
          <View style={{ flex:2}}>
              <Text style={styles.welcomeText}> Book an appointment with us today.</Text>
              <HomeButtons/>
          </View>
        
        </View>
    )
}
