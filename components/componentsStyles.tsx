import {StyleSheet} from 'react-native';

const componentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  homeButton:{
    padding:20,
    height:110,
    width:140,
      shadowColor: 'green',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      borderRadius: 10,
      backgroundColor: 'white',
      margin:10,
      alignItems: 'center',
      position: 'relative',

  },

  carouselContainer:{

    borderRadius:8,
    paddingBottom:40,
    width:330,
    left:-45
  },
  image:{height:200},

  searchBar: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'green',
    marginHorizontal: 15,
  },
  header: {

    backgroundColor: 'white',
    marginTop: 25, // only for IOS to give StatusBar Space
    padding: 10,
    height: 125,
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  headerTop: {
    flexDirection: 'row',
  },
  headerLeft: {},
  headerCenter: {
    flex: 1,
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTitle: {
    top: 10,
    fontSize: 21,
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerSubTitle: {
    top: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1,
    right: '0%',
    position: 'absolute',
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 50,
    borderRadius: 25,
    margin: 10,
    backgroundColor: 'green',
  },
  userDetailsContainer: {
    
  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    height: "90%",
    
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderBottomWidth: 0,
    alignItems: 'center',
    position: 'relative'
  },
  buttonsContainer: {
    
  },
  icon:{
    marginRight:30,
    color:"green",
    fontSize:40
  },
  welcomeText: {
    color: 'green',
    top: 50,
  },
  infoText:{
    fontSize:19,
    color:"green",
    margin:10
  }
});

export default componentsStyles;
