import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons';

import home1 from './home1';
import profile from './profile';

const Tab=createBottomTabNavigator();

export default function maincontainer() {
  return (

    
        <Tab.Navigator>
        

          <Tab.Screen 
            name="home1"
            component={home1}/>

            <Tab.Screen 
            name="profile"
            component={profile}/>
            
        </Tab.Navigator>
    
  )
}