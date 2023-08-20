import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';


const Booking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Resevation</Text>
      <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.card} >
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ_wA-EiiumafIYrjT81M3iCKz5vcVIEvng&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:12,marginTop:8}} />
          <Text  style={styles.cardtext} >Mars </Text>
        </TouchableOpacity>
        <Text style={styles.title1}>To</Text>
        <TouchableOpacity style={styles.card} >
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznyxi3zK-AFLunDHb0JxiB93EXXpR6zcPbw&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:12,marginTop:8}} />
          <Text  style={styles.cardtext} >Earth </Text>
        </TouchableOpacity>
      
        </View>
     
        <Text style={styles.title}>Travelling Method</Text>
       <View style={styles.rowContainer1}>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6b3t6XVKALhGXChbCBsn8eZ3CyraSrKYow&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSYz7e8gX5sjOpGBBrwpDV9OU_JCceucAwg&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6b3t6XVKALhGXChbCBsn8eZ3CyraSrKYow&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
      
    </View>
    <Text style={styles.title}>Date</Text>
    <View style={styles.rowContainer1}>
    <View style={styles.card10}>
    <Text style={styles.text1}>Arrive</Text>    
    
    <Text style={styles.text1}>Fri, Aug 11</Text>    
      </View>
    <View style={styles.card10}>
    <Text style={styles.text1}>Depart</Text>    
    
    <Text style={styles.text1}>Fri, Aug 11</Text>   
      </View>
  
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
   
paddingHorizontal:25,
paddingVertical:12,
    alignSelf: 'flex-end',
    margin:30,
    marginRight:40,
  },
  buttonText: {
    color: '#fff',
   
    fontSize: 16,
  },
  text1:{
    fontSize: 16,
    color: '#fff',
    textAlign:'center',
    marginTop:12,
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  image:{
    Radius: 20,
    
    marginTop: 20,
    marginHorizontal:20,
   
    elevation: 5,
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
  card10:{ height:80,
    width:140,
    backgroundColor:'#201F2E',
    borderWidth:0.2,
    borderColor:'#fff',
    borderRadius: 10,
    marginLeft:20,
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
   
    justifyContent:'center',
  },
});

export default Booking;
