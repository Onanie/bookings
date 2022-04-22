import React from 'react';
import {Text, View, TextInput} from 'react-native';
import componentStyles from './componentsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
  return (
    <View style={componentStyles.searchBar}>
      <Icon name="search" style={componentStyles.searchIcon} />
      <TextInput style={componentStyles.searchInput} />
    </View>
  );
}
