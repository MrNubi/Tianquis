/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppInner from './src/Layout/AppInner';
import {StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createTable } from './src/database';
import { fetchDataAndSaveToDB, loadDataFromDB } from './src/services/api';

const Drawer = createDrawerNavigator()

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
 
  useEffect(() => {
    SplashScreen.hide();
    
    
  });
  return (
    <NavigationContainer>
     

        
      <AppInner />


    </NavigationContainer>
  );
}

export default App;



