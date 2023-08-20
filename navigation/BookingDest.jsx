import { StyleSheet, Text, View,Image } from 'react-native'
import React, { PureComponent } from 'react'
import BookingForm from './BookingForm'

export class BookingDest extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading} >Book Your Resevation</Text>
        <View style={styles.row}>
            <View style={styles.v}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ_wA-EiiumafIYrjT81M3iCKz5vcVIEvng&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:52 ,marginLeft:5,marginTop:-5}} />
             
            </View>
            <Text style={styles.text}>TO</Text>
            <View style={styles.v}>
             <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznyxi3zK-AFLunDHb0JxiB93EXXpR6zcPbw&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:52 ,marginLeft:5,marginTop:-5}} />
              
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
      minHeight:"100%",
      
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