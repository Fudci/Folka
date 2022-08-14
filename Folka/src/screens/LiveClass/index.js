import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const LiveClass = (props) => {
  return (
    <View>
       <TouchableOpacity onPress={()=>props.navigation.navigate('Features')} style={{width:'90%',alignSelf:'center'}}>
      <Text>Features</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LiveClass