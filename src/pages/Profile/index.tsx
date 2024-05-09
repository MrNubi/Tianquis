/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';

import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from '../ItemView/ItemSytles';
import storage from '../../mmkv';
import {Dimensions} from 'react-native';
import Social from '../../img/Social.svg';

type ItemViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

function ProfilePage({navigation}: ItemViewScreenProps) {
  const [serchText, setSerchText] = useState('');

  const DistanceInherritance = storage.getString('distance');

  const {width} = Dimensions.get('window');
  const widthABS = Math.floor(width);
  console.log(width, widthABS, 'sds');
  const [spinner, setSpinner] = useState(false);

  return (
    <View style={styles.container}>
      <Social />
    </View>
  );
}

export default ProfilePage;
