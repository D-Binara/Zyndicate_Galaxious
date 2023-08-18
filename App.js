import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import S1 from './Src/Screen/s1';
import S2 from './Src/Screen/s2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="s2"
          component={S2}
          options={{title: 's2'}}
        />
        <Stack.Screen name="s1" component={S1} />
      </Stack.Navigator>
    </NavigationContainer>,
     <S1></S1>,
     <S2></S2>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
