import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import UserDetails from '../components/userDetails';

function Profile({currentUser}: any) {
  return (
<View style={styles.container}>
<View style={styles.profileContainer}>
<Text style={styles.userName}>Profile</Text>
 <Image style={styles.userImage} source={currentUser.image}/>
 <Text style={styles.userName}>{currentUser.name}</Text>
</View>
   <View style={{ flex:3}}>
    <UserDetails user={currentUser}/>
    </View>
</View>
  );
};

const mapStateToProps = (state: any) => {
    
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
