/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Distance from '../pages/Distance';
import ItemView from '../pages/ItemView';

export type RootStackParamList = {
  Main: undefined;
  SignIn: undefined;
  Distance: undefined;
  ItemView: undefined;
};

const AppInner = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, statusBarHidden: true}}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false, statusBarHidden: true}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false, statusBarHidden: true}}
      />
      <Stack.Screen
        name="Distance"
        component={Distance}
        options={{headerShown: false, statusBarHidden: true}}
      />
      <Stack.Screen
        name="ItemView"
        component={ItemView}
        options={{headerShown: false, statusBarHidden: true}}
      />
    </Stack.Navigator>
  );
};

export default AppInner;
