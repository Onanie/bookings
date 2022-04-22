import React from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect, useDispatch } from "react-redux";
import styles from "./styles";
import { selectAppointment } from "../redux/Actions";

function Appointments({appointments,navigation}:any){
  const dispatch = useDispatch();

      const ItemView = (item: any) => {
        return (
          <View style={{}}>
            <TouchableOpacity
              style={styles.appointmentsList}
              onPress={() => {
                dispatch(selectAppointment(item));
                navigation.navigate('details');
              }}
              >
              <Text style={styles.dateText}>{item.item.date}</Text>
              <Text style={styles.defaultText}>Doctor to see: {item.item.doctor}</Text>
              <Text style={styles.defaultText}>For: {item.item.speciality}</Text>
            </TouchableOpacity>
          </View>
        );
      };
    
      const appointmentsList = () => {
        return (
          <FlatList
            style={{}}
            data={appointments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <ItemView item={item} active={{}} selectItem={() => {}} />;
            }}
          />
        );
      };
    
      return (
        <View style={{ flex:1}}>
        <View style={styles.appointmentsContainer}>
         <Text style={styles.headerText}>My Appointments</Text>
         <Ionicons name="calendar-outline" color="green" size={50}/> 
        </View>
        <View style={{flex:2}}>
            {appointmentsList()}
        </View>
        </View>
      );
    };
   
 
    const mapStateToProps = (state: any) => {
        return {
          appointments: state.appointments,
        };
      };
      
      export default connect(mapStateToProps)(Appointments);

