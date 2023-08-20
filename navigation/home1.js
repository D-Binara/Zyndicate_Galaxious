import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,ImageBackground,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = {uri: 'https://media.istockphoto.com/id/1413584336/photo/astronaut-spacewalk-in-space-and-touching-orb-of-light.webp?b=1&s=170667a&w=0&k=20&c=ougmkUUwziBqoE_bwPecLgQUs4oATwFgAxrLHfRToe0='};

export default function home1() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.tpcard}>Adventure Begins Here</Text>
         
        <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate("Booking")}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        </ImageBackground>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020011',
    height:1000,
    
    
    
    
  },
  
  rowContainer:{
    flexDirection: 'row-reverse',
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
  card2: {
    backgroundColor: '#201F2E',
   
  },
  tpcard: {
    padding:25,
    color: '#fff',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
   
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    margin: 20,
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