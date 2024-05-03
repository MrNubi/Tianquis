/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './Sytles';
import storage from '../../mmkv';
import Header from '../../component/header/itemViewHeader';
import SearchBarGray from '../../component/bar/SearchBar';
import BannerBar from '../../component/bar/BannerBar';
import {FlashList} from '@shopify/flash-list';
import ItemViewItem from '../../component/item/ItemViewItem';
import {Data1} from '../../mmkv/data';
import {Dimensions} from 'react-native';
import ProgressBarTest from '../../component/bar/ProgressiveBarTest';
import V from '../../img/V.svg';

type ItemDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemDetail'
>;

function ItemDetail({navigation}: ItemDetailScreenProps) {
  const navigateToItemView = useCallback(() => {
    navigation.navigate('Distance');
  }, [navigation]);

  const {width} = Dimensions.get('window');
  const widthABS = Math.floor(width);
  console.log(width, widthABS, 'sds');
  const [spinner, setSpinner] = useState(false);
  const spinAction = () => {
    setSpinner(p => !p);
    console.log(spinner);
  };

  return <View style={styles.container}></View>;
}

export default ItemDetail;
