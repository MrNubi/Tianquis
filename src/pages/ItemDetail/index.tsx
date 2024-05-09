/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';

import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './Sytles';
import {FlashList} from '@shopify/flash-list';
import ItemViewItem from '../../component/item/ItemViewItem';
import {imageUrlArr} from '../../mmkv/data';
import {Dimensions} from 'react-native';
import DetailHeader from '../../component/header/itemDetailHeader';
import DetailViewItem from '../../component/item/DetailViewItem';

type ItemDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemDetail'
>;

function ItemDetail({navigation}: ItemDetailScreenProps) {
  const navigateToItemView = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const {width} = Dimensions.get('window');
  const widthABS = Math.floor(width);
  console.log(width, widthABS, 'sds');
  // const [spinner, setSpinner] = useState(false);
  // const spinAction = () => {
  //   setSpinner(p => !p);
  //   console.log(spinner);
  // };

  return (
    <View style={styles.container}>
      {/* header*/}
      <DetailHeader
        Nevigation={() => {
          navigateToItemView();
        }}
      />
      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Title</Text>
      </View>

      {/* ItemView */}
      <View
        style={{
          width: widthABS,
          backgroundColor: '#E8E8E8',
          flex: 1,
        }}>
        <FlashList
          data={imageUrlArr}
          renderItem={({item}) => <DetailViewItem item={item} />}
          estimatedItemSize={widthABS}
        />
      </View>
    </View>
  );
}

export default ItemDetail;
