/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {imageUrlArr} from '../../../mmkv/data';

const DetailViewItem = (item: any) => {
  console.log(item);
  const itemArr = item.item;
  return (
    <View style={styles.container}>
      <img src={itemArr.url} style={styles.titleImg} />
    </View>
  );
};

export default DetailViewItem;
