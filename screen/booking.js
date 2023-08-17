import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Page</Text>
      {/* Add more content for the booking page here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020011',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Booking;
