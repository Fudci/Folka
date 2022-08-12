import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomTabs from './BottomTabs';
import Detail from '../screens/Detail'
import {CardStyleInterpolators} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppStack = (props) => {
  const [load, setLoad] = useState(true);
  const [tokenApi, setToken] = useState()
  const time = () => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };
  useEffect(() => {
    time()
  }, []);

  if (load) {
    return <Splash></Splash>;
  }

  return (
    <Stack.Navigator
    // initialRouteName={tokenApi ? 'Home' :'First'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Bottom"
        component={BottomTabs}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
       <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
     
    </Stack.Navigator>
  );
};

export default AppStack;
