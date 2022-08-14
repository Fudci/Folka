import {StyleSheet, Dimensions, Platform} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatlist:{
    backgroundColor: 'white',
    flex: 0.5,
    marginRight:20,
    marginBottom:10,
    marginTop:20,
    borderRadius:10,
    elevation:4
  },
  containerImageF:{height:windowWidth*0.4, width: windowWidth*0.4,alignSelf:'center'},
  containerImage:{height:windowWidth*0.7, width: windowWidth*1,alignSelf:'center'},

  line:{
    height:1,
    width:'100%',
    backgroundColor:'grey'
  },
  containerText:{
    marginLeft:5,
    marginTop:-10
  },
  textName:{
    fontWeight:'300',
    fontSize:14
  },
  textDesc:{
    fontWeight:'bold',
    fontSize:18
  },texthead:{
    fontWeight:'bold',
    fontSize:20,
    color:'white'

  },
  containerDetailText:{
    marginHorizontal:20,
    marginVertical:10
  },
containerSplash:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
},
header:{backgroundColor:'red',height:70,justifyContent:'center',alignItems:'center'},
absolute:{position:'absolute',bottom:10,left:windowWidth*0.42,borderRadius:10,height:10,width:'20%',backgroundColor:'red'},
containerData:{
    height:windowHeight*0.07,
    width:windowHeight*0.07,
    borderRadius:100,
    marginHorizontal:20,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
},
containerBackF:{
    flex: 0.1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
    paddingHorizontal: 20,
  },containerWhiteF:{
    flex: 0.9,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -20,
  }
});

export default styles;
