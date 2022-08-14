import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import styles from '../../ulits/styles';
import Icon from 'react-native-vector-icons/Entypo';
import data from './data';
import {FlatList} from 'react-native-gesture-handler';
const Features = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBackF}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name={'chevron-left'} size={20} color={'white'} />
        </TouchableOpacity>
        <Text style={{...styles.texthead, marginHorizontal: 10}}>Back</Text>
      </View>
      <View style={styles.containerWhiteF}>
        <FlatList
          numColumns={4}
          data={data}
          renderItem={({item}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      ...styles.containerData,
                      backgroundColor: item.color,
                    }}>
                    <Icon name={item.name} size={20} color={'white'} />
                  </View>
                  <Text style={{...styles.textName, color: 'black'}}>
                    {item.name}
                  </Text>
                </View>
              </>
            );
          }}></FlatList>
      </View>
    </View>
  );
};

export default Features;
