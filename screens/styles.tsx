import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"white"
  },
  profileContainer:{
     flex:2,
     backgroundColor:"white",
     justifyContent:"center",
   alignItems:"center"
  },
  appointmentsContainer:{
    alignItems:"center",
    justifyContent:"center",
     backgroundColor:"white",
  flex:1
},
  userImage: {
    margin: 15,
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
    borderColor:"green",
    borderWidth:0.5,

  },
  userName:{
    fontSize:20,
    fontWeight:"bold",
    color:"green"
  },
  imageContainer:{
    flex:2,
    borderBottomWidth:50,
    borderBottomColor:"purple",
    backgroundColor:"red"
  },
  buttonsContainer:{flex:1,
     borderTopColor:"green",
      borderTopWidth:0.5,
       flexDirection:"row", 
  justifyContent:"center"
},
textContainer:{flex:3,
  margin:10, 
  borderRadius:5,
   borderColor:"green",
    borderWidth:0.5,
 justifyContent:"center"
},
  image:{
    width:350,
    height:250,
  },

  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
  },
   deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    margin: 10,
    backgroundColor: 'red',
  },
  deleteText: {
    color: 'white',
  },
  backText: {
    color: 'green',
  },
 
  welcomeText: {
    color: 'green',
    fontSize:20,
    fontWeight:"bold",
    alignSelf:"center",
    marginBottom:15
  },
  appointmentsList:{
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 5,
    height: 90,
    margin:5,
    backgroundColor: 'white',
    padding:10
  },
  headerText:{fontSize:30, color:"green",fontWeight:"bold", alignSelf:"center"},
  dateText:{
    alignSelf:"center", 
    fontSize:19,
    marginBottom:5
},
defaultText:{fontSize:15, color:"gray"},
mediumText:{fontSize:20,color:"gray",margin:5}
});

export default styles;
