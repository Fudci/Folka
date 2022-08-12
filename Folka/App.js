import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import storeRedux from './src/redux/store';
import AppStack from './src/route/route';
const App = () => {
  return (
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
  );
};

export default App;
