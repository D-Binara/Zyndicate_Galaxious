import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';


export default function signup({navigation}) {
  return (
     <View style={styles.box1}>


    
     <Image source={require('./moon-sky-night-background-asset-game-2d-futuristic-generative-ai_191095-2086.jpg')}></Image>


     <View style={styles.container1}>


     
       
       <Text style={styles.title1}>Sign Up</Text>

       <View style={styles.inputBox1}>

          <TextInput placeholder='Username' placeholderTextColor='#fff' style={styles.frmg}></TextInput>
      <TextInput placeholder='E-mail' placeholderTextColor='#fff'  style={styles.frmg}></TextInput>
       <TextInput placeholder='Phone' placeholderTextColor='#fff'  style={styles.frmg}></TextInput>
       <TextInput placeholder='Password' placeholderTextColor='#fff' secureTextEntry style={styles.frmg}></TextInput>
       <TextInput placeholder='Confirm Password' placeholderTextColor='#fff' secureTextEntry style={styles.frmg}></TextInput>
       



       </View>
       <View style={styles.inputBox2}>

         

         <Pressable style={styles.signin} onPress={()=>navigation.navigate("Tab")} ><Text style={styles.signin1}>Sign Up</Text></Pressable>


       </View>

       <View style={styles.inputBox3}>

         <Pressable style={styles.gosignup} ><Text style={styles.gosignup1}>If you already have an account
        
         
         
         </Text></Pressable>

          <Pressable style={styles.signup} onPress={()=> navigation.navigate("signin")}><Text style={styles.signup1} >Sign In</Text></Pressable>

       </View>
       
       <View style={styles.imgIcon}>

      <Image style={styles.img3} source={require('./Facebook_f_logo_(2021).svg.png')}></Image>
      <Image style={styles.img5} source={require('./Apple_logo_black.svg.png')}></Image>
      <Image style={styles.img4} source={require('./google-logo-png-suite-everything-you-need-know-about-google-newest-0.png')}></Image>
        
       
       </View>
        

    
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
  img3:{
    position:'absolute',
    width:50,
    left:80,
    height:50,

  },
  img4:{
    position:'absolute',
    width:50,
    left:280,

    height:50,

  },
  img5:{
    position:'absolute',
    width:50,
    left:180,
     top:-5,
    height:60,

  },
  imgIcon:{
    position:'absolute',
    width:50,
    height:50,
    top:450,
    width:500,
   
    display:'flex',
    alignItems:'center',
    flex:2,

  },
  btns:{
    position:'absolute',
    top:630,
    zIndex:100,
    left:50

  },
  imgf:{
    width:40,
    height:40,
    position:'absolute',
    top:5,
    left:10

  },
  btn1:{
    backgroundColor:'#1877F2',
    padding:10,
    width:312,
    height:49,
    borderRadius:10,
    marginTop:10


  },
  btng1:{
    backgroundColor:'#fff',
    padding:10,
    width:312,
    height:49,
    borderRadius:10,
    marginTop:10


  },
  btn2:{
   color:'#fff',
   textAlign:'center',
   fontSize:14
    

  },
  btng:{
   color:'#fff',
   textAlign:'center',
   fontSize:14,
   color:'#000'
    

  },
  inputBox2:{
    color:'#fff',
    
    position:'absolute',
    top:350
  },
  fogpass:{
    position:'absolute',
    top:-65,
    left:220,
    width:200


  },
  fogpass1:{
    color:'#2E83EF',
    textDecorationLine:'underline',
    fontSize:12


  },

  inputBox3:{
    position:'absolute',
    top:400,
    left:80

  },
  gosignup1:{
    color:'#fff'

  },
  signup:{
    
    position:'absolute',
    fontSize:14,
   left:220,
    top:-20
    
    
    
  },
  signup1:{
    
    color:'#2F89FC',
    marginTop:20
   
    
  },
  signin:{
    marginTop:-18,
    marginLeft:120,
    width:165,
    padding:20,
    height:63,
    backgroundColor:'#0044A7',
    borderRadius:43,
    position:'absolute',
    zIndex:100
  },

  signin1:{
    color:'#fff',
    textAlign:'center',
    fontSize:19,
    marginTop:-4

  },

  inputBox1:{

    backgroundColor:'rgba(255, 255, 255, 0.18)',
    padding:10,
    width:412,
    height:800,
    borderRadius:60,
    
  },
  frmg:{
    fontSize:16,
    backgroundColor:'#000',
    height:57,
    marginTop:15,
    padding:10,
    width:344,
    marginLeft:20,
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#fff',
    color:'#fff'
    
    
    

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
    marginTop:-120,
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