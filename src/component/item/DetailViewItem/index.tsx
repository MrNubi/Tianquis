/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {imageUrlArr} from '../../../mmkv/data';

const DetailViewItem = (item: any) => {
  console.log(item, item.item.url);
  const itemUri = item.item.url;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: itemUri,
        }}
        style={styles.titleImg}
      />
    </View>
  );
};

export default DetailViewItem;
