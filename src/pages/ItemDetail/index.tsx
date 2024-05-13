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
import SocialGray from '../../img/SocialGray.svg';

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
          ListFooterComponent={() => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 300,
                  marginVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={styles.descView}>
                  <Text style={styles.descText}>Description</Text>
                  <Text style={styles.descText}>Something To Descript </Text>
                </View>

                <Text style={styles.descText}>Dealr Info</Text>
                <View style={{flexDirection: 'row'}}>
                  <SocialGray />
                  <Text>{`${'NickName'}  ${'50%'}`}</Text>
                  <Text>50%</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default ItemDetail;
/*
얇은 사 하이얀 고깔은
 고이 접어 나빌레라
파르라니 깎은 머리 
박사 고깔에 감추오고
두 볼에 흐르는 빛이
정작으로 고와서 서러워라
빈 대에 황촛불이
말없이 녹는 이 밤에
오동잎 잎새마다 달이 지는데

소매는 길어서 하늘은 넓고
돌아설듯 날아가며 사뿐히 접어올린 외씨버선이여

까만 눈동자 살포시 들어 
먼 하늘 한개 별빛에 모도우고

복사꽃 고운 뺨에 아롱지는 두방울이야
세사에 시달려도 번뇌煩腦는 별빛이라

휘여져 감기우고 다시 접어 뻗은 손이
깊은 마음 속 거룩한 합장合掌인양 하고

이밤사 귀또리도 자새우는 삼경三更인데
얇은 사紗 하이얀 고깔은 고이 접어서 나빌레라


*/
