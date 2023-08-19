import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Planner = () => {
  return (
    <View style={styles.container}>
      <Text>Planner</Text>
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

export default Planner;
