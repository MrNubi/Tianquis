/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {Button, Text, TextInput, View, ViewComponent} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Pine from '../../img/BluePine.svg';

import BlueInput from '../../component/inputBox/BlueInputText';
import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './DistanceStyle';
import BlueOneInput from '../../component/inputBox/BlueOneTextInput';
import ProgressBar from '../../component/bar/ProgressBar';

function Distance() {
  const [count, setCount] = useState(1);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <ProgressBar totalStep={12} nowStep={count} />
      <Button onPress={() => setCount(prev => ++prev)} title="1증가" />
      <Button onPress={() => setCount(prev => --prev)} title="1감소" />
    </View>
  );
}

export default Distance;
