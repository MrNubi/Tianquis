/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {
  Button,
  DeviceEventEmitter,
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
import Header from '../../component/header/itemViewHeader';
import {SearchBar} from 'react-native-screens';
import SearchBarGray from '../../component/bar/SearchBar';
import BannerBar from '../../component/bar/BannerBar';
import {FlashList} from '@shopify/flash-list';
import ItemViewItem from '../../component/item/ItemViewItem';
import {Data1} from '../../mmkv/data';
import {Dimensions} from 'react-native';

type ItemViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemView'
>;

function ItemView({navigation}: ItemViewScreenProps) {
  const navigateToItemView = useCallback(() => {
    navigation.navigate('Distance');
  }, [navigation]);
  const SearchRef = useRef<TextInput | null>(null);
  const [serchText, setSerchText] = useState('');
  const DistanceInherritance = storage.getString('distance');
  const {width} = Dimensions.get('window');
  console.log(width, 'sds');
  const widthABS = Math.floor(width);
  return (
    <View style={styles.container}>
      {/* header*/}
      <Header />
      {/* searchbar bar */}
      <SearchBarGray
        placeHolder=""
        onChangeText={t => setSerchText(t)}
        onSubmitEditing={() => {
          console.log('d : ', serchText);
        }}
        value={serchText}
        ref={SearchRef}></SearchBarGray>
      {/* navigation bar */}
      <BannerBar />
      {/* ItemView */}
      <View
        style={{
          width: widthABS,
          height: 500,
          backgroundColor: '#E8E8E8',
          flex: 1,
        }}>
        <FlashList
          data={Data1}
          renderItem={({item}) => <ItemViewItem item={item} />}
          estimatedItemSize={200}
          estimatedListSize={{
            height: 200,
            width: widthABS,
          }}
        />
      </View>
    </View>
  );
}

export default ItemView;
