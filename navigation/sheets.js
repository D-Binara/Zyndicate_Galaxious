import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sheets = () => {
  const [iconPressed, setIconPressed] = useState(Array.from({ length: numRows * numColumns }, () => false));
  const [text, setText] = useState('');

  const handleIconPress = (iconIndex) => {
    const updatedPressedState = [...iconPressed];
    updatedPressedState[iconIndex] = !updatedPressedState[iconIndex];
    setIconPressed(updatedPressedState);
  };

  // Define the number of rows and columns
  const numRows = 3;
  const numColumns = 7;

  // Calculate the total number of icons
  const totalIcons = numRows * numColumns;

  // Generate an array of icons
  const icons = Array.from({ length: totalIcons }, (_, index) => index);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Choose Seat</Text>
    <View  style={styles.row1}>
      <Text style={styles.topi}>Individual Space Explorer Seat</Text>
      <TextInput
        style={{height: 30,width:50,padding:15, borderWidth:1,
          borderColor:'#fff',
          marginLeft:15,
          borderRadius: 10,}}
        placeholder="no"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      /></View>
      <View>
        {/* Loop through rows */}
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {/* Loop through columns */}
            {Array.from({ length: numColumns }).map((_, colIndex) => {
              const iconIndex = rowIndex * numColumns + colIndex;
              return (
                <TouchableOpacity
                  key={iconIndex}
                  onPress={() => handleIconPress(iconIndex)}
                  style={[styles.iconContainer, { backgroundColor: iconPressed[iconIndex] ? 'blue' : 'white' }]}
                >
                  <Image
                    source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/cook-design-catering-b-end-icon-library/seat-1.png' }}
                    style={{ width: 20, height: 20, tintColor: iconPressed[iconIndex] ? 'white' : 'blue' }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
      <View>
        {/* Loop through rows */}
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {/* Loop through columns */}
            {Array.from({ length: numColumns }).map((_, colIndex) => {
              const iconIndex = rowIndex * numColumns + colIndex;
              return (
                <TouchableOpacity
                  key={iconIndex}
                  onPress={() => handleIconPress(iconIndex)}
                  style={[styles.iconContainer, { backgroundColor: iconPressed[iconIndex] ? 'blue' : 'white' }]}
                >
                  <Image
                    source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/cook-design-catering-b-end-icon-library/seat-1.png' }}
                    style={{ width: 20, height: 20, tintColor: iconPressed[iconIndex] ? 'white' : 'blue' }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Bookingmember")}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020011',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1: {
    flexDirection: 'row',

  },
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
   
paddingHorizontal:25,
paddingVertical:12,
    alignSelf: 'flex-end',
    margin:200,
    marginRight:40,
  },
  buttonText: {
    color: '#fff',
   
    fontSize: 16,
  },
  iconContainer: {
  padding:8,
    width: 35,
    height: 35,
   margin:6,
    borderRadius: 10,
   
  },
  topi: {
    marginLeft: 25,
    marginBottom:25,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 15,
  },
  topic: {
    marginRight: 10,
    padding: 25,
    color: '#fff',
    fontSize: 25,
  },
  input: {
    height: 40,
    width: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 20,
    borderRadius: 10,
  },
});

export default sheets;