import * as React from 'react';
import { SafeAreaView, ScrollView ,StyleSheet,View,Text,Button, ImageBackground,Dimensions} from "react-native";


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const Plane2 = ({})=> {
    return(
        <SafeAreaView style={{flex:1}} >
            <ScrollView>
                     <View style ={styles.container}>
         
                        <ImageBackground source={require('../Images/Plan2bg.png')} resizeMode="cover" style={styles.image}>
                        <Text style={styles.moon}>Moon</Text>
                        <Text style={styles.description1}>The moon is Earth's natural satellite and the only other celestial body that humans  have visited.
                         It has a barren   and rocky landscape with  numerous craters and.                            
                       </Text>
                       <Text style={styles.}>
                       Start your day with a visit to the  SPACE station 
                       </Text>
                        <View style={styles.buttonex}>
                        <Button 
                               onPress={() => navigation.navigate('s1')}
                               title="Book Now"
                            />
                        </View>
                        <Text style={styles.description2}>
                        mountains. It lacks an  atmosphere and experiences extreme temperatures. 
                        It's a fascinating destination  for space exploration and offers  breathtaking views of Earth  from its surface
                        </Text>
                        <Text>Find more details</Text>
                        <Button 
                               onPress={() => navigation.navigate('s1')}
                               title="View"
                            />
                        </ImageBackground>
                    </View> 
            </ScrollView>
        </SafeAreaView>
    )
    }
    const styles = StyleSheet.create ({
        container: {
            flex: 1,
        },
        moon:{
            fontFamily:'secular one',
            fontSize:55,
            color:'white',
            fontWeight:'bold',
            paddingBottom:20,
            paddingRight:100,
            paddingLeft:50,
        },
        description1:{
            fontFamily:'Roboto',
            color:'white',
            textAlign:'justify',
            fontSize:13,
            paddingBottom:630,
            paddingRight:25,
            paddingLeft:50,
        },
        buttonex:{
            paddingTop:75,
            paddingLeft:65,
            color:'#2196F3',
            alignItems:'center',
            elevation:8,
            borderRadius: 10,
            paddingVertical: 0,
            paddingHorizontal: 12
        },
        image: {
            height: 1500,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'Right',
            paddingRight:60,
        },
        description2:{
            fontFamily:'Roboto',
            color:'white',
            textAlign:'justify',
            fontSize:13,
            paddingRight:25,
            paddingLeft:50,
        },

})

export default Plane2;