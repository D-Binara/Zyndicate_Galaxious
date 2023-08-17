import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {home,map,planner,profile} from './screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator()
const screenOptions={
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    background:"#000"
  }
}
export default function App() {
  return (
   <NavigationContainer screenOptions ={screenOptions}>
    
   </NavigationContainer>
  )
}