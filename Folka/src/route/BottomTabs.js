import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LiveShow from '../screens/LiveShow';
import LiveClass from '../screens/LiveClass';
import Ecourse from '../screens/Ecourse';
import Comunnity from '../screens/Comunity';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BottomTabs = () => {
  console.log(Platform)
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          // backgroundColor: 'rgba(0, 0, 0, 1)',
          height: windowHeight*0.1,
          // borderColor: 'red',
          // borderWidth: 1,
          elevation: 0,
          borderTopWidth: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          marginBottom:20,
          borderRadius:100,
          width:"90%",

          alignSelf:'center'
        },
        headerShown: true,
        headerTintColor: '#FFFFFF',
        // headerStyle: {backgroundColor: '#1A1C22'},
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        // tabBarInactiveTintColor: '#828387',
        // tabBarActiveTintColor: '#FFFFFF',
        // tabBarInactiveBackgroundColor: '#000000',
        // tabBarActiveBackgroundColor: '#1A1C22',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '700'},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'LiveShow') {
            iconName = focused ? 'analytics' : 'home-outline';
            size = focused ? 25 : 20;
          } else if (route.name == 'LiveClass') {
            iconName = focused ? 'search' : 'search-outline';
            size = focused ? 25 : 20;
          } else if (route.name == 'Ecourse') {
            iconName = focused ? 'tv' : 'tv-outline';
            size = focused ? 25 : 20;
          } else if (route.name == 'Comunnity') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
            size = focused ? 25 : 20;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen options={{headerShown: false}} name="LiveShow" component={LiveShow} />
      <Tab.Screen
        options={{headerShown: false}}
        name="LiveClass"
        component={LiveClass}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Ecourse"
        component={Ecourse}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Comunnity"
        component={Comunnity}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
