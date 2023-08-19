import { View, Text } from 'react-native';
import React from 'react';
import home from './screens/home';
import third from './screens/third';
import secondScreen from './screens/secondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signin from './screens/signin';
import signup from './screens/signup';
import exe from './screens/exe';
import Maincontainer from './navigation/map';
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





const Stack= createNativeStackNavigator();
const BottomTab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();

function Drawer1(){
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="profile" component={Profile} />
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
      screenOptions={{
        tabBarActiveTintColor: 'rgba(0, 68, 167, 1)',
         tabBarStyle: {
      height: 80,
      paddingHorizontal: 5,
      paddingTop: 0,
      backgroundColor: 'rgba(40, 38, 53, 1)',
      position: 'absolute',
      borderTopWidth: 0,
      borderTopLeftRadius:50,
      
      borderTopRightRadius:50,
      
      
      
      
  },headerTitleAlign:'center', headerStyle: {
          backgroundColor: 'rgba(40, 38, 53, 1)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
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
    <Stack.Navigator screenOptions={{headerShown:false}} >
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
   <Stack.Screen

      name="signin"
      component={signin}
      options={{title:"Sign In"}}

    />
    <Stack.Screen

      name="signup"
      component={signup}
      options={{title:"Sign Up"}}

    />
    
    <Stack.Screen

      name="Tab"
      component={Tab}
      options={{title:"app2"}}

    />

    
    
    </Stack.Navigator>
    
      
   </NavigationContainer>
  )
}