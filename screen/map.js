import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
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

export default Map;
