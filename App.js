import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import S1 from './Src/Screen/s1';
import S2 from './Src/Screen/s2';
import Plane2 from './Src/Screen/Plane2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="Plane2" component={Plane2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;