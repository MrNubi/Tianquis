/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import MarcketBlue from '../../../img/MarketBlue.svg';
import Social from '../../../img/Social.svg';
import BackBlue from '../../../img/BackBtnBlue.svg';
import BackWhite from '../../../img/BackBtnWhite.svg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

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
  //     useNativeDriver: false,A
  //   }).start(() => {
  //     Nevigation();
  //   });
  // };

  const onPressProfile = () => {
    Nevigation();
  };
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };
  const createTime = '2024-04-12  12:00';

  return (
    <View style={styles.container1}>
      {/*외곽 컨테이너 뷰*/}
      <View style={styles.innerContainer1}>
        {/*아이템 컨테이너1*/}
        <View style={{position: 'absolute', left: 14, top: 41}}>
          <Pressable>
            <BackBlue onPress={onPressBack} />
          </Pressable>
        </View>
        <MarcketBlue />
        <View style={{position: 'absolute', right: 14, top: 41}}>
          <Pressable>
            <Social onPress={onPressProfile} />
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
