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
import BluePin from '../../img/BluePine.svg';
import DragBox from '../../component/test/DragBox';

type DistanceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Distance'
>;

function Distance({navigation}: DistanceScreenProps) {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <BluePin />
      <Text style={styles.distanceText}>
        ¿Qué tan lejos{`\n`} puedes viajar?
      </Text>
      <ProgressBar totalStep={4} />
      <Button onPress={() => setCount(prev => ++prev)} title="1증가" />
      <Button onPress={() => setCount(prev => --prev)} title="1감소" />

      <DragBox />
    </View>
  );
}

export default Distance;
