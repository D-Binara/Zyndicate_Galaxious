import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BookingButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonBack}><Text style={styles.textBack}>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext}><Text style={styles.textNext}>Next</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default BookingButton

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