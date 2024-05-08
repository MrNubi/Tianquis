/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Animated,
  PanResponder,
  Easing,
  Pressable,
  Text,
} from 'react-native';
import MarcketBlue from '../../../img/MarketBlue.svg';
import Social from '../../../img/Social.svg';
import Message from '../../../img/Message.svg';
import styles from './styles';
import storage from '../../../mmkv';

interface props {
  backBtn: boolean;
  StyleType: string;
  pressBackBtn: () => void;
}

const TianquisHeader = ({backBtn, StyleType, pressBackBtn}: props) => {
  // const startAnimation = () => {
  //   // Animated.timing(spinValue, {
  //   //   toValue: backBtn ? 0 : 1, // 180도 회전
  //   //   duration: 500, // 애니메이션 지속 시간 (밀리초)
  //   //   easing: Easing.linear, // 완화 함수
  //   //   useNativeDriver: false,
  //   // }).start(() => {
  //   //   pressBackBtn();
  //   // });
  //   pressBackBtn();
  // };

  return (
    <View style={styles.container1}>
      {/*외곽 컨테이너 뷰*/}
      <View style={styles.innerContainer}>
        {/*아이템 컨테이너*/}

        <Pressable>
          <MarcketBlue />
        </Pressable>
        <Pressable>
          <MarcketBlue />
        </Pressable>
        <Pressable style={styles.distanceBtn}>
          <Social />
        </Pressable>
        <View />
      </View>
    </View>
  );
};

export default TianquisHeader;
