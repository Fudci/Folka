import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import styles from '../../ulits/styles';
const Detail = props => {
  var item = props.route.params.data;
  return (
    <View style={styles.container}>
      <Header title={'Detail Product'} back={true}></Header>
      <Image
        source={{uri: item.cover}}
        style={styles.containerImage}
        resizeMode={'stretch'}></Image>
      <View style={styles.containerDetailText}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textDesc}>{item.price}</Text>
        <View style={styles.line}></View>
        <Text style={styles.textDesc}>Description</Text>
        <Text style={styles.textName}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default Detail;
