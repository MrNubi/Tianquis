/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  ViewComponent,
} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Pine from '../../img/BluePine.svg';

import BlueInput from '../../component/inputBox/BlueInputText';
import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './DistanceStyle';
import BluePin from '../../img/BluePine.svg';
import ProgressBarTest from '../../component/bar/ProgressiveBarTest';

type DistanceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Distance'
>;

function Distance({navigation}: DistanceScreenProps) {
  const navigateToItemView = useCallback(() => {
    navigation.navigate('ItemView');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <BluePin />
      <Text style={styles.distanceText}>
        ¿Qué tan lejos{`\n`}
        puedes viajar?
      </Text>
      <ProgressBarTest />
      <Pressable style={styles.listo} onPress={navigateToItemView}>
        <Text style={styles.listoText}>Listo</Text>
      </Pressable>
    </View>
  );
}

export default Distance;
