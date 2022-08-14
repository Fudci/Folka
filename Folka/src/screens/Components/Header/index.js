import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../../ulits/styles';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const index = ({title, back}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.header}>
        {back &&   <TouchableOpacity style={{position:'absolute',left:20}} onPress={() => navigation.goBack()}>
        <Icon name={'chevron-left'} size={20} color={'white'} />
      </TouchableOpacity> }
      <Text style={styles.texthead}>{title}</Text>
    </View>
  );
};

export default index;
