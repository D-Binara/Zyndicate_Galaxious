import { View, Text, Button,StyleSheet,TextInput  } from 'react-native';
import React, { useState } from 'react';


export default function App() {

  const [name,setName]=useState('anil');


  let data=100;
   let values1;
  const  fruit=(values)=>{
    data=20;
    console.warn(data);
    
    

  }
  const  fruit1=(values)=>{
    data=20;
   values1=values;
    console.warn(values);
    setName("kevin")

    
    
    

  }
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
       <Text>{name}</Text>
      
      <Button title="click" onPress={fruit}></Button>
      
      <TextInput onChangeText={(text)=>setName(text)} ></TextInput>
      <Button title="click1" onPress={fruit1}></Button>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    margin:100
  }

})

 

    




