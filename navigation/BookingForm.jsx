import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import BookingButton from './BookingButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';


const BookingForm = () => {
    const [name,SetName]=useState("");
    const [email, setEmail] = useState("");
    const [phone,setPhone]=useState("");
    const [dob,setDob]=useState("");
    const [proffession,setProffession]=useState("");
    const[photo,setPhoto]=useState(null);

    let person=(<Icon name='person-sharp' style={styles.section}></Icon>)
    let personEmail=(<Icon name='person-sharp' style={styles.section}></Icon>)
    let telephone=(<Icon name='person-sharp' style={styles.section}></Icon>)
    let date=(<Icon name='person-sharp' style={styles.section}></Icon>)
    let proffessionP=(<Icon name='person-sharp' style={styles.section}></Icon>)
   
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
            <Text style={styles.heading}>Member Details</Text>
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
               <TouchableOpacity onPress={pickImage} style={styles.input3}>
                    {photo && <Image source={{uri:photo}} style={{width:200,height:200,}}/>}
                    <Text style={{color:"#fff",}}>Add Photo </Text>
               </TouchableOpacity>

            </View>
            <BookingButton/>

        
        </View>
    )
};

export default BookingForm

const styles = StyleSheet.create({
    outer:{
        backgroundColor:"#282635",
        alignItems:"center",
        flexDirection:"column",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        minHeight:"60%",
        marginTop:20
        
    },
    inner1:{
        alignItems:"center",
        flexDirection:"column",
        paddingTop:5,
        paddingBottom:5,
        
    },
    inner2:{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:"space-between",
        padding:10,
        
    },
    inner3:{
       marginTop:10,
       marginRight:20,
       paddingTop:10,
        
    },
    input:{
        width:280,
        height:40,
        borderColor:"#AC97C7",
        borderWidth:1,
        borderRadius:5,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        marginBottom:5,
        color:"#fff",
        
    },
    input2:{
        width:150,
        height:40,
        borderColor:"#AC97C7",
        borderWidth:1,
        borderRadius:5,
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        marginBottom:5,
        color:"#fff",
        
    },
    input3:{
        width:100,
        height:100,
        borderColor:"#AC97C7",
        borderWidth:1,
        borderRadius:2,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        marginTop:15,
        justifyContent:"center",
        marginRight:3,
    },
    section: {
        
        alignItems: 'center',
        color: '#fff',
    },
    heading:{
        color:"#AC97C7",
        fontSize:25,
        marginTop:20,
        marginBottom:20,
        marginRight:90,

    }
})
//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