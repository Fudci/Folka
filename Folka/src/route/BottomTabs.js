import React from 'react';
import {Dimensions, Platform,Text} from 'react-native';
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
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: windowHeight * 0.1,
          elevation: 0,
          borderTopWidth: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          marginBottom: 20,
          borderRadius: 100,
          width: '90%',
          paddingTop: 4,
          alignSelf: 'center',
          paddingHorizontal:30
        },
        headerShown: true,
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '700'},
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'LiveShow') {
            iconName = focused ? 'ios-tv-outline' : 'ios-tv-sharp';
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
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: 'black' }}>
             LiveShow
            </Text>
          ),
          tabBarIconStyle: {
            backgroundColor: 'red',
            borderRadius: 100,
            height: windowWidth * 0.15,
            width: windowWidth * 0.15,
          },
        }}
        name="LiveShow"
        component={LiveShow}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: 'black' }}>
              LiveClass
            </Text>
          ),
          tabBarIconStyle: {
            backgroundColor: 'red',
            borderRadius: 100,
            height: windowWidth * 0.15,
            width: windowWidth * 0.15,
          },
        }}
        name="LiveClass"
        component={LiveClass}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: 'black' }}>
              E-course
            </Text>
          ),
          tabBarIconStyle: {
            backgroundColor: 'red',
            borderRadius: 100,
            height: windowWidth * 0.15,
            width: windowWidth * 0.15,
          },
        }}
        name="Ecourse"
        component={Ecourse}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: 'black' }}>
             Comunnity
            </Text>
          ),
          tabBarIconStyle: {
            backgroundColor: 'red',
            borderRadius: 100,
            height: windowWidth * 0.15,
            width: windowWidth * 0.15,
          },
        }}
        name="Comunnity"
        component={Comunnity}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
