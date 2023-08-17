import { View, Text,Button } from 'react-native'
import React from 'react'

export default function third({navigation}) {
  return (
    <View>
      <Text>third</Text>
        <Button title="Natigate to second screen"
      onPress={()=> navigation.navigate("secondScreen")}
      />
    </View>
  )
}