
import { View, Text } from 'react-native';
import React from 'react';
import home from './screens/explore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home1 from './navigation/home1';
import Map1 from './navigation/map';
import Planpage from './navigation/planpage';
import Profile1 from './navigation/profile';
import Payment from './navigation/payment';
import setting from './navigation/setting';
import Booking from './navigation/booking';
import explore from './screens/explore';
import start from './screens/start';
import payment from './navigation/payment';
import Bookingmember from './navigation/BookingMember';
import sheet from './navigation/sheets';






const Stack= createNativeStackNavigator();
const BottomTab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();


function Drawer1(){
  return(
    <Drawer.Navigator  >
    <Drawer.Screen name="profile" component={Profile} options={{ headerShown: false }}/>
      <Drawer.Screen name="setting" component={setting} />
      <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  )
}





function Home(){
  return(

    
      <Home1/>
    
  )
}

function Map(){
  return(
    <Map1/>
    
  )
}
function Plan(){
  return(
    <Planpage/>
    
  )
}
function Profile(){
  return(
    <Profile1/>
    
  )
}

function Tab(){
  return(
    <BottomTab.Navigator initialRouteName="FEED"
    
       
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
      
       
       
      })}>
      <BottomTab.Screen name='Home' component={Home}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
        <BottomTab.Screen name='Map' component={Map}
           options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" color={color} size={size} />
          ),
        }}
        />
        <BottomTab.Screen name='Plan' component={Plan}

           options={{
          tabBarLabel: 'Plan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
        />
        <BottomTab.Screen name='Profile' component={Drawer1}
          
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
        />
 
    </BottomTab.Navigator>
  )
}



export default function App() {
  return (
   <NavigationContainer >

    <Stack.Navigator  >

     <Stack.Screen 

      name="start"
      component={start}
      options={{title:"welcome", headerShown: false }}

    />

    <Stack.Screen

      name="home"
      component={home}
      options={{title:"welcome"}}
     

    />

    

    
   <Stack.Screen

      name="signin"
      component={Signin}
      options={{title:"Sign In", headerShown: false }}

    />
    <Stack.Screen

      name="signup"
      component={Signup}
      options={{title:"Sign Up", headerShown: false }}

    />
    
    <Stack.Screen

      name="Tab"
      component={Tab}
      options={{title:"app2", headerShown: false }}

    />

    <Stack.Screen

      name="explore"
      component={explore}
      options={{title:"app2", headerShown: false }}

    />
    <Stack.Screen initialRouteName="FEED"
    
       
      

      name="Booking"
      component={Booking}
      options={{title:"Booking",headerTintColor:"#fff",headerTitleAlign:'center', headerRight: () => (
          <MaterialCommunityIcons
            name="bell"
            size={23}
            color="#fff"
            style={{ marginRight: 30 }}
          />
        ),headerStyle: {
              backgroundColor: '#282635',
              
      },headerTitleStyle:{color:"#fff"}}}
      
      

    />
     <Stack.Screen


    
      name="payment"
      component={payment}
      options={{title:"Payment",headerTintColor:"#fff",headerTitleAlign:'center', headerRight: () => (
          <MaterialCommunityIcons
            name="bell"
            size={23}
            color="#fff"
            style={{ marginRight: 30 }}
          />
        ),headerStyle: {
              backgroundColor: '#282635',
              
      },headerTitleStyle:{color:"#fff"}}}
      

    />
     <Stack.Screen


    
      name="Bookingmember"
      component={Bookingmember}
      options={{title:"Booking",headerTintColor:"#fff",headerTitleAlign:'center', headerRight: () => (


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
import Booking from './screen/booking'; // Use lowercase "booking.js" here


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

        ),headerStyle: {
              backgroundColor: '#282635',
              
      },headerTitleStyle:{color:"#fff"}}}
      

    />
    
    <Stack.Screen


    
      name="sheets"
      component={sheet}
      options={{title:"Booking",headerTintColor:"#fff",headerTitleAlign:'center', headerRight: () => (
          <MaterialCommunityIcons
            name="bell"
            size={23}
            color="#fff"
            style={{ marginRight: 30 }}
          />
        ),headerStyle: {
              backgroundColor: '#282635',
              
      },headerTitleStyle:{color:"#fff"}}}
      

    />
    

    
    
    </Stack.Navigator>

    
      
   </NavigationContainer>
  )
}

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


