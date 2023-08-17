import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable}  from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function home({navigation}) {
  
  return (
    <View style={styles.box1}>

    
     <Image source={require('./space-universe-with-planets_896675-92.jpg')}></Image>


     <View style={styles.container1}>
       
       <Text style={styles.title1}>Enjoy Trip with me</Text>
       <Text style={styles.title2}>The universe is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.</Text>

     </View>

      <View style={styles.box}>

      
     
    <Pressable  style={styles.box2}
       
      onPress={()=> navigation.navigate("signin")}
      >
         <Text style={styles.box2txt}>Sign in</Text>
      </Pressable>

       
    <Pressable  style={styles.box2}
       
      onPress={()=> navigation.navigate("signup")}
      >
         <Text style={styles.box2txt}>Sign Up</Text>
      </Pressable>


      


     </View>
    
      <LinearGradient
        
        colors={['rgba(2, 0, 17, 0)', '#020011','#020011', '#020011']}
        style={styles.background}
      >
      

      

      </LinearGradient>
 
       
      <StatusBar style='auto'></StatusBar>
    </View>
  )

 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    position:'absolute',
    top:250,
    zIndex:10,
    
  },
  title1:{
    fontSize:46,
    width:250,
    marginLeft:37,
    marginTop:50,
    color:'#fff'

  },
  title2:{
    fontSize:13,
    width:360,
    letterSpacing:1,
    marginLeft:37,
    marginTop:30,
    
    color:'#fff'

  },
  box1:{
    backgroundColor:'#000',
    width:'100%',
    height:1000

  },
  box2:{
    backgroundColor:'#0044A7',
    padding:15,
    margin:10,
    textAlign:'center',
    borderRadius:43,
    width:165,
    

    

  },
  box2txt:{
    textAlign:'center',
    marginLeft:-10,
    fontSize:19,
    color:'#fff'

  },
  box3:{
    marginTop:10,
    position:'absolute',
    left:20,
    zIndex:1000

  },
  box:{
    position:'relative',
    width:165,
    top:50,
    zIndex:1000,
    height:1000,
    left:120,
    backgroundColor:'#000'



  },
  background:{
    position:'absolute',
    width:'100%',
    height:500,
    top:300
    

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width:'80%',
    marginTop:100,
    backgroundColor:'#000'
    
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  
});