import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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

export default Profile;
