import { View, Text } from 'react-native';
import React from 'react';
import home from './screens/home';
import third from './screens/third';
import secondScreen from './screens/secondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen

      name="home"
      component={home}
      options={{title:"welcome"}}

    />

    <Stack.Screen

      name="secondScreen"
      component={secondScreen}
      options={{title:"second screen"}}

    />

    <Stack.Screen

      name="third"
      component={third}
      options={{title:"third screen"}}

    />
   
    </Stack.Navigator>
   </NavigationContainer>
  )
}