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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} options={{}} />
      <Stack.Screen name="SignIn" component={SignIn} options={{}} />
      <Stack.Screen name="Distance" component={Distance} options={{}} />
      <Stack.Screen name="ItemView" component={ItemView} options={{}} />
    </Stack.Navigator>
  );
};

export default AppInner;
