import React from 'react';
import { View, ScrollView, StyleSheet, Image,  } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements'; // Corrected import

const users = [
  {
   date:"12/12/2024",
   time:"6.PM",
   raw:2,
   seats:3,
  },
  // ... other user objects ...
];
const imagex = {uri: 'BookingTicket/peneliti-yakini-planet-mars-pernah-dihuni-di-masa-lalu-ini-buktinya.jpg'};
const Ticket = () => {
  return (
    <ScrollView style={{minHeight:1000,}}>
      <View style={styles.container}>
        
        <View style={styles.into}>
          <Text style={{color:'#fff',fontWeight:'bold',paddingTop:15,fontSize:20}}>Go to Mars</Text >
          <View>
            <Image
              style={{width:250,height:300}}
              source={imagex}
            />
          </View>
          
            {users.map((u,i)=>(
              <View key={i} style={styles.des}>
                <View style={styles.desIn}>
                  <Text style={{color:'#fff',fontWeight:'bold',paddingTop:15,}}>Date  : {u.date}</Text>
                  <Text style={{color:'#fff',fontWeight:'bold',paddingTop:15,}}>Time  : {u.time}</Text>
                </View>
                <View style={styles.desIn}>
                  <Text style={{color:'#fff',fontWeight:'bold',paddingTop:15,}}>Raw   : {u.raw}</Text>
                  <Text style={{color:'#fff',fontWeight:'bold',paddingTop:15,}}>Seats : {u.seats}</Text>
                </View>
              </View>
            ))}
            <Button

              buttonStyle={{
                borderRadius: 15,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width:200,
              }}
              title="Confirm"
            />
         
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    marginTop:100,
    alignItems:'center'
    
   
  },
  into:{
    backgroundColor:'#fff',
    width:280,
    minHeight:600,
    borderRadius:15,
    alignItems:'center',
    backgroundColor:"#282635",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  des:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  desIn:{
    padding:15,
  }
});

export default Ticket;
