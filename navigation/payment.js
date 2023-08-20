import { StyleSheet, Text, View,Image ,Switch, Pressable} from 'react-native';
import React, { useState } from 'react';




export default function payment() {

    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.details1}>
        <Text style={styles.details1payment}>Payment Details</Text>
        <View style={styles.box1}>
        <Text style={styles.box1total}>Total Payee</Text>
        <Text style={styles.box1totalbtc}>0.8BTC</Text>

        </View>
      </View>
      
      <View style={styles.details1}>
        <Text style={styles.details1payment}>Payment Method</Text>
        <View style={styles.box1}>
        <Text style={styles.box1total1}>+</Text>
        <Text style={styles.box1totalbtc1}>Add new payment method</Text>

        </View>
      </View>

      <View style={styles.details1}>
        <Text style={styles.details1payment}>Saved</Text>
        <View style={styles.box12}>
        <Image style={styles.box1total2} source={require('./images/mastercard-logo-mastercard-logo-png-vector-download-19.png')}></Image>
        
        <Switch style={styles.box1totalbtc2}
         trackColor={{false: '#767577', true: 'red'}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
             
        
        />

        </View>

      </View>
      <View style={styles.details3}>
        
        

         <View style={styles.box13}>
         
        <Pressable>
          <Text style={styles.backbtn}>Back</Text>
        </Pressable>
         <Pressable>
          <Text style={styles.ticketbtn}>View your tickets</Text>
        </Pressable>
       
        </View>
        
       


     

      </View>

       

       
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#020011',
        height:900,
        color:'#fff'
    },
    backbtn:{
      backgroundColor:'#fff',
      width:120,
      height:46,
      borderRadius:13,
      fontSize:13,
      padding:12,
      textAlign:'center',
      marginLeft:-18


    },
    ticketbtn:{
      backgroundColor:'#0044A7',
      width:162,
      height:46,
      borderRadius:13,
      fontSize:13,
      padding:12,
      textAlign:'center',
      color:'#fff',
      marginTop:-45,
      marginLeft:140


    },
    details1:{
        position:'relative',
        
        height:200
    },
    details3:{
        position:'relative',
        
        height:200
    },
    btns1:{
      backgroundColor:'#fff',
      position:'absolute',
      top:100,
      left:20

    },
    details1payment:{
        position:'relative',
        left:40,
        top:25,
        fontSize:20,
        color:'#fff'
    },
    box1:{
        backgroundColor:'#282635',
        marginTop:40,
        width:330,
        height:89,
        marginLeft:40,
        padding:20,
        borderRadius:13,
        

    },
     box13:{
        
        marginTop:80,
        width:330,
        height:89,
        marginLeft:40,
        padding:20,
        borderRadius:13,
        

    },
    box12:{
        backgroundColor:'#282635',
        marginTop:40,
        width:245,
        height:89,
        marginLeft:40,
        padding:20,
        borderRadius:25,
        

    },
    box1total:{
        fontSize:26,
        color:'#fff'

    },
    box1totalbtc:{
        fontSize:26,
        color:'#E4C311',
        position:'absolute',
        left:210,
        top:22
    }
    ,
    box1total1:{
        fontSize:26,
        marginLeft:20,
        marginTop:4,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#fff',
        width:40,
        paddingLeft:13,
        color:'#fff',
        borderRadius:13

        

    },
    
    box1total2:{
        width:100,
        height:60

        

    },

box1totalbtc1:{
     fontSize:14,
        color:'#fff',
        position:'absolute',
        left:120,
        top:32
}
,
box1totalbtc2:{
  position:'absolute',
  top:23,
  left:160,
  transform: [{ scale:1.5 }]
     
        
}

})