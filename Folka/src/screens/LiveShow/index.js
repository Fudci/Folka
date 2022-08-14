import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Header from '../Components/Header';
import styles from '../../ulits/styles';
import {render} from './renderItem';
const LiveShow = props => {
  React.useEffect(() => {
    props.upComing();
  }, []);
  return (
    <View style={styles.container}>
      <Header title={'List Product'} />
      <FlatList
        style={{marginLeft: 20}}
        numColumns={2}
        data={props.data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Detail', {data: item})}
              style={styles.containerFlatlist}>
              <Image
                source={{uri: item.cover}}
                style={styles.containerImageF}
                resizeMode={'contain'}></Image>
              <View style={styles.containerText}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textDesc}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Features')}
        style={styles.absolute}></TouchableOpacity>
    </View>
  );
};

const reduxDispacth = dispatch => ({
  upComing: () => dispatch({type: 'GET_DATA'}),
});
const reduxState = state => ({
  data: state.Data.data,
});
export default connect(reduxState, reduxDispacth)(LiveShow);
