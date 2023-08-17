import { View, Text, Button } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function home({navigation}) {
  return (
    <View>
      <Button title="Natigate to third screen"
      onPress={()=> navigation.navigate("third")}
      />

      <Button title="Natigate to second screen"
      onPress={()=> navigation.navigate("secondScreen")}
      />
       
       
      <StatusBar style='auto'></StatusBar>
    </View>
  )
}