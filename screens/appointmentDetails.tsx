import React from "react";
import {View, Text, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";
import { updateAppointment } from "../redux/Actions";
import styles from "./styles";

const AppointmentDetails = ({selectedAppointment, navigation}:any) =>{
    const dispatch = useDispatch();
    const deleteItem = (item:any)=>{
        Alert.alert('Warning', `Are you sure you want to delete this appointment with ${item.doctor} ?`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                    dispatch(updateAppointment(item));
                    navigation.goBack();
                },
              },
          ]);
        };
    
    return(
    <View style={{flex:1}}>
         <View style={styles.textContainer}>
            <Text style={styles.headerText}>Appointment Details</Text>
            <Text style={styles.mediumText}>Appointment Date: {selectedAppointment.item.date}</Text>
            <Text style={styles.mediumText}>Doctor to see: {selectedAppointment.item.doctor}</Text>
            <Text style={styles.mediumText}>For: {selectedAppointment.item.speciality}</Text>
            <Text style={styles.mediumText}>Location: {selectedAppointment.item.address}</Text>
        </View>
        <View style={styles.buttonsContainer}>
           
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={()=>deleteItem(selectedAppointment.item)}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
const mapStateToProps = (state: any) => { 
    return {
    selectedAppointment: state.selectedAppointment,
    };
  };
  
  export default connect(mapStateToProps,updateAppointment)(AppointmentDetails);