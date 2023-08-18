import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleBookNow = () => {
    navigation.navigate('Booking'); // Navigate to the Booking screen
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.card2}>
        <Text style={styles.tpcard}>Adventure Begins Here</Text>
        <TouchableOpacity style={styles.button} onPress={handleBookNow}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
     
       <Text style={styles.title}>Travelling Method</Text>
       <View style={styles.rowContainer1}>
       <TouchableOpacity style={styles.card1} >
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.card1} >
          <Text  style={styles.cardtext1} >SpaceBalloon</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020011',
  },
  rowContainer:{
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  rowContainer1:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin:25,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin:25,
    position:'relative'
  },
  card:{
    height:140,
    width:140,
    backgroundColor:'#020011',
    borderWidth:1,
    borderColor:'#fff',
    borderRadius: 10,
   padding:7,
   marginLeft:10,
   marginBottom:7,
   marginRight:10,
    elevation: 3,
  },
  card1:{
    height:140,
    width:140,
    backgroundColor:'#201F2E',
    borderWidth:0.2,
    borderColor:'#fff',
    borderRadius: 10,
    marginLeft:20,
  },
  cardtext:{
    textAlign:'center',
    color:'#fff',
    justifyContent:'center',
  },
  cardtext1:{
    textAlign:'center',
    color:'#fff',
    paddingTop:100,
    justifyContent:'center',
  },
  card2: {
    backgroundColor: '#201F2E',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  tpcard: {
    color: '#fff',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  topic: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 25,
  },
});

export default Home;
