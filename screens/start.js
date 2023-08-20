import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Button, ImageBackground, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const S1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <ImageBackground source={require('./images/S1BG.png')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.myTitle}>Expore The {'\n'}Universe</Text>
                    <Text style={styles.description}>The universe is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy.</Text>
                    <View style={styles.buttonex}>
                        <Button
                            title="Explore"
                            onPress={() => navigation.navigate('explore')}
                        />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonex: {
        paddingTop: 75,
        paddingLeft: 65,
        color: '#2196F3',
        alignItems: 'center',
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 12,
        
    },
    image: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'Right',
        paddingRight: 60,
    },
    description: {
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'justify',
        fontSize: 13,
        paddingRight: 25,
        paddingLeft: 50,
    },
    myTitle: {
        fontFamily: 'secular one',
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 300,
        paddingRight: 100,
        paddingLeft: 50,
    },
    container: {
        paddingBottom: 150,
        flex: 1,
    },
});

export default S1;