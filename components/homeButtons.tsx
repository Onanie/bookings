import React from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import style from "./componentsStyles";
import { Buttons } from "../components/buttons";
import { Ionicons } from "@expo/vector-icons";
const HomeButtons = () =>{
    
      const ItemView = (item: any) => {

        return (
          <View style={style.buttonsContainer}>
            <TouchableOpacity
              style={style.homeButton}>
             <Ionicons name={item.item.icon} size={48} color="green" />
              <Text>{item.item.name}</Text>
            </TouchableOpacity>
          </View>
        );
      };
    
      const buttonsList = () => {
        return (
          <FlatList
            style={{}}
            data={Buttons}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <ItemView item={item} active={{}} selectItem={() => {}} />;
            }}
          />
        );
      };
    
      return (
        <View style={{ alignSelf:"center"}}>
          {buttonsList()}
        </View>
      );
    };
   
 
export default HomeButtons;