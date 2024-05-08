/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './Sytles';
import {FlashList} from '@shopify/flash-list';
import ItemViewItem from '../../component/item/ItemViewItem';
import {imageUrlArr} from '../../mmkv/data';
import {Dimensions} from 'react-native';

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
  // const [spinner, setSpinner] = useState(false);
  // const spinAction = () => {
  //   setSpinner(p => !p);
  //   console.log(spinner);
  // };

  return (
    <View style={styles.container}>
      {/* header*/}

      {/* ItemView */}
      <View
        style={{
          width: widthABS,
          height: 500,
          backgroundColor: '#E8E8E8',
          flex: 1,
        }}>
        <FlashList
          data={imageUrlArr}
          renderItem={({item}) => <ItemViewItem item={item} />}
          estimatedItemSize={widthABS}
        />
      </View>
    </View>
  );
}

export default ItemDetail;
