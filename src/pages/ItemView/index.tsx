/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './ItemSytles';
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

type ItemViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemView'
>;

function ItemView({navigation}: ItemViewScreenProps) {
  const navigateToProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);
  const navigateToDetailView = useCallback(() => {
    navigation.navigate('ItemDetail');
  }, [navigation]);
  const SearchRef = useRef<TextInput | null>(null);
  const [serchText, setSerchText] = useState('');

  const DistanceInherritance = storage.getString('distance');
  const [distanceText, setDistanceText] = useState(
    DistanceInherritance !== undefined ? DistanceInherritance : '1km',
  );
  const {width} = Dimensions.get('window');
  const widthABS = Math.floor(width);
  console.log(width, widthABS, 'sds');
  const [spinner, setSpinner] = useState(false);
  const spinAction = () => {
    setSpinner(p => !p);
    console.log(spinner);
  };

  return (
    <View style={styles.container}>
      {/* header*/}
      <Header
        DT={distanceText}
        spinner={spinner}
        setSpinner={spinAction}
        onPressProfile={navigateToProfile}
      />
      {/* searchbar bar */}
      {!spinner ? (
        <View style={{width: '100%', height: 90}}>
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
        </View>
      ) : (
        <View style={{justifyContent: 'center', backgroundColor: 'yellow'}}>
          <Text style={styles.distanceText}>
            ¿Qué tan lejos{`\n`}
            puedes viajar?
          </Text>
          <ProgressBarTest
            setDistanceText={t => {
              setDistanceText(t);
            }}
          />
          <View
            style={{
              padding: 20,
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{rotate: '180deg'}],
            }}>
            <V onPress={spinAction} />
          </View>
        </View>
      )}

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
          renderItem={({item}) => (
            <ItemViewItem item={item} onPress={() => navigateToDetailView()} />
          )}
          estimatedItemSize={widthABS}
        />
      </View>
    </View>
  );
}

export default ItemView;
