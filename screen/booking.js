import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';


const Booking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Resevation</Text>
      <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.card} >
          <Text  style={styles.cardtext} >Earth </Text>
        </TouchableOpacity>
        <Text style={styles.title1}>To</Text>
        <TouchableOpacity style={styles.card} >
          <Text  style={styles.cardtext} >Earth </Text>
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
});

export default Booking;
