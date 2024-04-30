/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppInner from './src/Layout/AppInner';
import {StatusBar} from 'react-native';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500); //스플래시 활성화 시간
  });
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <AppInner />
    </NavigationContainer>
  );
}

export default App;
