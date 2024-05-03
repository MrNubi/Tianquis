/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Animated, Pressable, Text} from 'react-native';
import MarcketBlue from '../../../img/MarcketBlue.svg';
import Social from '../../../img/Social.svg';
import Message from '../../../img/Message.svg';
import styles from './styles';
import storage from '../../../mmkv';

interface props {
  Nevigation: () => void;
}

const DetailHeader = ({Nevigation}: props) => {
  // const [spinValue] = useState(new Animated.Value(0));
  // const [distasnce, setDistance] = useState(
  //   storage.getString('distance') ? storage.getString('distance') : '1km',
  // );

  // const startAnimation = () => {
  //   Animated.timing(spinValue, {
  //     toValue: spinner ? 0 : 1, // 180도 회전
  //     duration: 500, // 애니메이션 지속 시간 (밀리초)
  //     easing: Easing.linear, // 완화 함수
  //     useNativeDriver: false,
  //   }).start(() => {
  //     Nevigation();
  //   });
  // };

  const nevigationToProfilePage = () => {
    Nevigation();
  };
  const createTime = '2024-04-12  12:00';

  return (
    <View style={styles.container1}>
      {/*외곽 컨테이너 뷰*/}
      <View style={styles.innerContainer1}>
        {/*아이템 컨테이너1*/}
        <MarcketBlue />
        <View style={{position: 'absolute', right: 14, top: 41}}>
          <Pressable>
            <Social onPress={nevigationToProfilePage} />
          </Pressable>
        </View>
      </View>
      <View style={styles.innerContainer2}>
        {/*아이템 컨테이너2*/}
        <Text>{`${createTime}`}</Text>
      </View>
    </View>
  );
};

export default DetailHeader;
