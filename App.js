import * as React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screen/home';
import Map from './screen/map';
import Profile from './screen/profile';
import Planner from './screen/planner';
import { createStackNavigator } from '@react-navigation/stack';
import Booking from './screen/Booking';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNavigation}  options={{ headerShown: false }} />
   
          <Stack.Screen 
            name="Booking"
            component={Booking}
            options={{
              headerStyle: {
                backgroundColor: '#282635', // Customize the header background color
                height: 120, // Customize the header height
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
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
          height: 80,
        },
        headerStyle: {
          backgroundColor: '#282635', // Customize the header background color
          height: 120, // Customize the header height
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
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Map" component={Map}  />
      <Tab.Screen name="Planner" component={Planner} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
