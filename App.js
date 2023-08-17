import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screen/home';
import Map from './screen/map';
import Profile from './screen/profile';
import Planner from './screen/planner';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <PaperProvider>
      <NavigationContainer>
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
              fontSize: 20,    // Adjust the font size here
               // Use your desired font family
              marginBottom: 6, },
            tabBarActiveTintColor: '#0044A7',   // Active tab color
            tabBarInactiveTintColor: '#FFFFFF',    // Inactive tab color
          
            tabBarStyle: {                      // Bottom tab bar style
              backgroundColor: '#282635',       // Bottom tab bar color
            },
            headerStyle: {                      // Top bar style
              backgroundColor: '#282635',       // Top bar color
            },
            headerTintColor: '#fff',            // Top bar text color
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Planner" component={Planner} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
