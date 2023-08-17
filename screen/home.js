import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

 
  const handleBookNow = () => {
    navigation.navigate('Booking'); // Make sure 'Booking' matches the screen name in your navigator
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.tpcard}>Adventure Begins Here</Text>
        <TouchableOpacity style={styles.button} onPress={handleBookNow}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.topic}>Popular Destination</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020011',
  },
  card: {
    backgroundColor: '#201F2E',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  tpcard: {
    color: '#fff',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  topic:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:25,
  }
});

export default Home;
