/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../pages/Main';
export type RootStackParamList = {
  Main: undefined;
};
const AppInner = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} options={{}} />
    </Stack.Navigator>
  );
};

export default AppInner;
