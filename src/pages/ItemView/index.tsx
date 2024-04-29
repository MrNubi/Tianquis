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
import styles from './ItemSytles';
import BlueOneInput from '../../component/inputBox/BlueOneTextInput';
import ProgressBar from '../../component/bar/ProgressBar';
import BluePin from '../../img/BluePine.svg';
import DragBox from '../../component/test/DragBox';
import ProgressBarTest from '../../component/bar/ProgressiveBarTest';
import storage from '../../mmkv';

type ItemViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemView'
>;

function ItemView({navigation}: ItemViewScreenProps) {
  const navigateToItemView = useCallback(() => {
    navigation.navigate('Distance');
  }, [navigation]);
  const DistanceInherritance = storage.getString('distance');
  return (
    <View style={styles.container}>
      <BluePin />
      <Text style={styles.distanceText}>{DistanceInherritance}</Text>
    </View>
  );
}

export default ItemView;
