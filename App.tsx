/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppInner from './src/Layout/AppInner';

function App() {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <AppInner />
    </NavigationContainer>
  );
}

export default App;
