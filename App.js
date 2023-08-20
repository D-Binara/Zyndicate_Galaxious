import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import S1 from './Src/Screen/s1';
import S2 from './Src/Screen/s2';
import Planner from './Src/Screen/Planner';
import Home from './Src/Screen/home';
import Profile from './Src/Screen/profile';
import Map from './Src/Screen/map';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="Plannner" component={Planner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation() { 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Planner') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 6,
        },
        tabBarActiveTintColor: '#0044A7',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#282635',
          height: 65,
        },
        headerStyle: {
          backgroundColor: '#282635', // Customize the header background color
          height: 75, // Customize the header height
        },
        headerTintColor: '#fff', // Customize the text color of the header
        headerTitleAlign: 'center',
        headerRight: () => (
          <MaterialCommunityIcons
            name="bell"
            size={23}
            color="#fff"
            style={{ marginRight: 30 }}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Planner" component={Planner} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default App;