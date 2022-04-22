import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import componentStyles from './componentsStyles';
import Search from './serach';

export default function NavBar() {

  return (
    <View style={componentStyles.header}>
      <View style={componentStyles.headerTop}>
        <TouchableOpacity
          style={componentStyles.headerLeft}
        >
          <Ionicons name="menu-outline" size={25} color="green" />
        </TouchableOpacity>
        <View style={componentStyles.headerCenter}>
          <Text style={componentStyles.headerTitle}>Good Life Clinic</Text>
        </View>
        <View style={componentStyles.headerRight}>
          <Ionicons name="pencil-outline" size={25} color="green"/>
        </View>
      </View>
      <Search />
    </View>
  );
}
