/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MessageGray from '../../../img/MessageGray.svg';
import SocialGray from '../../../img/SocialGray.svg';
import HeartGray from '../../../img/HeartGray.svg';

const TestItem = (data: any) => {
  console.log('c', data, data.item.onTime);

  const OnPress = () => {
    console.log('press', new Date());
    data.onPress();
  };

  const makedTime = data.item.onTime;
  const curTime = new Date();
  const timeAgoY = curTime.getFullYear() - makedTime.getFullYear();
  const timeAgoM = curTime.getMonth() - makedTime.getMonth();
  const timeAgoD = curTime.getDay() - makedTime.getDay();
  const timeAgoH = curTime.getHours() - makedTime.getHours();
  const timeAgoMin = curTime.getMinutes() - makedTime.getMinutes();

  const mannerRate = 50;
  const messageCount = 104;
  const likeCount = 105;

  const kt = curTime.getTime() - makedTime.getTime();
  // 1000 : ms ->초, 60: 초->분, 60 : 분 ->시 , 24: 시->일, 31 : 일-> 월, 12: 월 -> 연
  const DividenTimes = 1000 * 60 * 60 * 24 * 31 * 12;
  const Days =
    kt >= DividenTimes
      ? `${Math.floor(kt / DividenTimes)}년 전`
      : kt >= DividenTimes / 12
      ? `${Math.floor((kt * 12) / DividenTimes)}개월 전`
      : kt >= DividenTimes / 12 / 31
      ? `${Math.floor((kt * 12 * 31) / DividenTimes)}일 전`
      : kt >= DividenTimes / 12 / 31 / 24
      ? `${Math.floor((kt * 12 * 31 * 24) / DividenTimes)}시간 전`
      : `${Math.floor((kt * 12 * 31 * 24 * 60) / DividenTimes)}분 전`;

  const timeAgo = `${timeAgoY} 년 전 ${timeAgoM} 개월 전 ${timeAgoD} 일 전 ${timeAgoH} 시간 전 ${timeAgoMin} 분 전`;

  return (
    <View style={styles.container}>

        <View style={styles.titleImg}></View>
    
    </View>
  );
};

export default TestItem;
