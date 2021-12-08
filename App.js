/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigations';
import { View } from 'react-native';
import NoNetworkBar from './src/components/common/NoNetworkBar';
import GlobalProvider from './src/context/Provider';
  
const App = () => {
 

  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>
  );
};

export default App;
