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
import TestItem from '../../component/item/TestItem';

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

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2/src/json/po.php');
      if (!response.ok) {
        throw new Error('네트워크 응답에 문제가 있습니다.');
      }
      
      const json = await response.json();
      console.log(json)
      setData(json); // response.body를 data에 저장
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* header*/}
      <Header
        DT={distanceText}
        spinner={spinner}
        setSpinner={spinAction}
        onPressProfile={fetchData}
      />
      {/* searchbar bar */}
      {!spinner ? (
        <View style={{width: '100%', height: 90}}>
         
          {/* navigation bar */}
          <BannerBar />
        </View>
      ) : (
        <View style={{justifyContent: 'center', backgroundColor: 'yellow'}}>
         
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
          contentContainerStyle={{paddingLeft:10, paddingBottom:5, paddingTop:5}}
          data={Data1}
          numColumns={3}
          renderItem={({item}) => (
            <TestItem item={item} onPress={() => navigateToDetailView()} />
          )}
          estimatedItemSize={widthABS}
        />
      </View>
      <View
        style={{

          width: widthABS,
          height: 120,
          backgroundColor: '#E8E8E8',
          alignItems:"center",
          justifyContent:"center"
        }}
      >
          <BannerBar />

        <View
          style={{
            width: widthABS,
            height: 60,
            backgroundColor:"white",
            flexDirection:"row",
            justifyContent:"space-between"
          }}
        >
          <View
          style={styles.bottomNavItem}
          >

          </View>
          <View
          style={styles.bottomNavItem}
          >

          </View>
          <View
          style={styles.bottomNavItem}
          >

          </View>
          <View
          style={styles.bottomNavItem}
          >

          </View>
          <View
          style={styles.bottomNavItem}
          >

          </View>

        </View>

      </View>
    </View>
  );
}

export default ItemView;
