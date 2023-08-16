import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';


const BookingForm = () => {
    const [name,SetName]=useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone]=useState("");
    const [dob,setDob]=useState("");
    const [proffession,setProffession]=useState("");
    const[photo,setPhoto]=useState(null);

    const pickImage=async()=>{
        let result= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        })
        console.log(result)
        if(!result.canceled){
            setPhoto(result.assets[0].uri)
        }

    }
    return (
        <View style={styles.outer}>
            <View style={styles.inner1}>
                <TextInput value={name} placeholder={"Full Name"} placeholderTextColor={"#fff"} onChangeText={(text)=>SetName(text) } style={styles.input} ></TextInput>
                <TextInput  value={email} placeholder={"Email Address"}  placeholderTextColor={"#fff"} onChangeText={(text)=>setEmail(text)} style={styles.input}></TextInput>
                <TextInput  value={phone} placeholder={"Telephone"}  placeholderTextColor={"#fff"} onChangeText={(text)=>setPhone(text)} style={styles.input}></TextInput>
            </View>
            <View style={styles.inner2}>
                <View style={styles.inner3}>
                    <TextInput value={dob} placeholder={"Date of Birth"}  placeholderTextColor={"#fff"} onChangeText={(text)=>setDob(text)}style={styles.input2}></TextInput>
                    <TextInput  value={proffession} placeholder={"Profession"} placeholderTextColor={"#fff"} onChangeText={(text)=>setProffession(text) } style={styles.input2}></TextInput>
                </View>
               <Button title='Add Photo' onPress={pickImage} style={styles.input3}>
                    {photo && <Image source={{uri:photo}} style={{width:200,height:200,}}/>}
               </Button>

            </View>

        
        </View>
    )
};

export default BookingForm

const styles = StyleSheet.create({
    outer:{
        backgroundColor:"#282635",
        alignItems:"center",
        flexDirection:"column",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    inner1:{
        alignItems:"center",
        flexDirection:"column",
        padding:5,
        
    },
    inner2:{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:"space-between",
        padding:10,
        
    },
    inner3:{
       marginTop:10,
       marginRight:30,
       paddingTop:10,
        
    },
    input:{
        width:250,
        height:30,
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:2,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        marginBottom:3,
        color:"#fff",
        
    },
    input2:{
        width:150,
        height:30,
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:2,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        marginBottom:3,
        color:"#fff",
        
    },
    input3:{
        width:70,
        height:70,
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:2,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        marginTop:15,
        background:"#282635",
    }
})