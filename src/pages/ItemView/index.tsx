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
import Home from '../../img/home.svg';
import Search from '../../img/newSearch.svg';
import Gem from '../../img/gem.svg';
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
  const [spinner2, setSpinner2] = useState(false);
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
        spinner={spinner2}
        setSpinner={spinAction}
        onPressProfile={fetchData}
      />
      <BannerBar />
      {/* searchbar bar */}
      {!spinner ? (
        <Pressable onPress={spinAction} style={{position:"absolute",top:0,left:0, zIndex:11, width: '70%', backgroundColor:"black", height:"100%" }}>
         
          {/* navigation bar */}
          
        </Pressable >
      ) : (
       <></>
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
            <Home/>
          </View>
          <View
          style={styles.bottomNavItem}
          >
            <Search/>
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
            <Gem/>
          </View>

        </View>

      </View>
    </View>
  );
}

export default ItemView;
