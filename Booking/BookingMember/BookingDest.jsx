import { StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import BookingForm from './BookingForm'

export class BookingDest extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading} >Book Your Resevation</Text>
        <View style={styles.row}>
            <View style={styles.v}>
              <Text>HI</Text>
            </View>
            <Text style={styles.text}>TO</Text>
            <View style={styles.v}>
              <Text>HI</Text>
            </View>
        </View>
        <BookingForm/>
        
      </View>

    )
  }
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:"#020011",
      minHeight:"80%",
      
    },
    row:{
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:'space-between', 
      marginBottom:40,
      marginTop:50,
      padding:10,
      marginHorizontal:30,
      
    },
    v:{
      backgroundColor:"#fff",
      width:100,
      height:100,
      borderRadius:50,
      alignItems:'center',
      padding:5,
    },
    heading:{
      color:"#fff",
      fontWeight:"500",
      marginTop:45,
      fontSize:35,
      marginHorizontal:10,


    },
    text:{
      color:"#fff",
      fontWeight:'bold',
      marginTop:30,
      padding:10,
  
    }
})

export default BookingDest