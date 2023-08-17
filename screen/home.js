import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
     
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
});

export default Home;
