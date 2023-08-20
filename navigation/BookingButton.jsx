import { StyleSheet, Text, TouchableOpacity, View ,Pressable} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function  BookingButton(){
   const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonBack}><Text style={styles.textBack}>Back</Text></TouchableOpacity>
        <Pressable style={styles.buttonNext}  onPress={()=>navigation.navigate('payment')}><Text style={styles.textNext}>Next</Text></Pressable>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
      marginVertical:20,
    },
    row:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:'space-between', 
        marginBottom:5,
    },
    buttonNext:{
        width:"35%",
        height:30,
        backgroundColor:"#0044A7",
        alignItems:'center',
        padding:5,
        borderRadius:10,
    },
    buttonBack:{
        width:"35%",
        height:30,
        backgroundColor:"#fff",
        alignItems:'center',
        padding:5,
        borderRadius:10,
    },
    textNext:{
        color:"#fff",
        fontWeight:'bold',
    },
    textBack:{
        color:"#000",
        fontWeight:'bold',
    }
    
})