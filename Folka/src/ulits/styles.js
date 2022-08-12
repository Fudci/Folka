import {StyleSheet, Dimensions, Platform} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:Platform.OS =='android' ? -30 :20
  },
});

export default styles;
