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
                        <Text style={styles.myTitle}>Moon</Text>
                        <Text style={styles.description}>The moon is Earth's natural satellite and the only other celestial body that humans  have visited.
                         It has a barren   and rocky landscape with  numerous craters and. 
                                                         
                       </Text>
                        <View style={styles.buttonex}>
                        <Button 
                               onPress={() => navigation.navigate('s1')}
                               title="Book Now"
                            />
                        </View>
                        <Text style={styles.description}>
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
            height: screenHeight,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'Right',
            paddingRight:60,
        },
        description:{
            fontFamily:'Roboto',
            color:'white',
            textAlign:'justify',
            fontSize:13,
            paddingRight:25,
            paddingLeft:50,
        },
        myTitle:{
            fontFamily:'secular one',
            fontSize:35,
            color:'white',
            fontWeight:'bold',
            paddingTop:300,
            paddingRight:100,
            paddingLeft:50,
        },
        container: {
            paddingBottom:150,
            flex: 1,
        },
})

export default Plane2;