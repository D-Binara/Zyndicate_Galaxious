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
import Maincontainer from './navigation/maincontainer';
import app1 from './navigation/app1';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const Stack= createNativeStackNavigator();
const BottomTab=createBottomTabNavigator();


function Home(){
  return(

    <View>
      <Text>Home page</Text>
    </View>
  )
}

function Map(){
  return(
    <View>
      <Text>Mapping page</Text>
    </View>
    
  )
}
function Plan(){
  return(
    <View>
      <Text>Plane page</Text>
    </View>
    
  )
}
function Profile(){
  return(
    <View>
      <Text>Profile page</Text>
    </View>
    
  )
}

function Tab(){
  return(
    <BottomTab.Navigator initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <BottomTab.Screen name='Home' component={Home}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
        <BottomTab.Screen name='Map' component={Map}/>
        <BottomTab.Screen name='Plan' component={Plan}/>
        <BottomTab.Screen name='Profile' component={Profile}
          
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="user" color={color} size={size} />
          ),
        }}
        />
 
    </BottomTab.Navigator>
  )
}



export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}  >
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

      name="app1"
      component={app1}
      options={{title:"app1"}}

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