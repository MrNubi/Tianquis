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
import V from '../../../img/V.svg';
import Social from '../../../img/Social.svg';
import Message from '../../../img/Message.svg';
import styles from './styles';
import storage from '../../../mmkv';
import { SearchBar } from 'react-native-screens';
import SearchBarGray from '../../bar/SearchBar';

interface props {
  spinner: boolean;
  DT: string;
  setSpinner: () => void;
  onPressProfile: () => void;
}

const Header = ({spinner, DT, setSpinner, onPressProfile}: props) => {
  const [spinValue] = useState(new Animated.Value(0));
  const [Text, setText] = useState("")
  const [distasnce, setDistance] = useState(
    storage.getString('distance') ? storage.getString('distance') : '1km',
  );

  const startAnimation = () => {
    // Animated.timing(spinValue, {
    //   toValue: spinner ? 0 : 1, // 180도 회전
    //   duration: 500, // 애니메이션 지속 시간 (밀리초)
    //   easing: Easing.linear, // 완화 함수
    //   useNativeDriver: false,
    // }).start(() => {
    //   setSpinner();
    // });
    setSpinner();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '180deg'],
  });



  return (
    <View style={styles.container1}>
      {/*외곽 컨테이너 뷰*/}
      <View style={styles.innerContainer}>
        {/*아이템 컨테이너*/}
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>

          <Pressable style={styles.distanceBtn} onPress={startAnimation}>
            {/* distance Slide 버튼 */}
          
              <V />
              {/* spin Btn */}
          
          </Pressable>
        </View>
        <View>
        <SearchBarGray
            
            placeHolder=""
            onChangeText={t => setText(t)}
            onSubmitEditing={() => {
              console.log('d : ', Text);
            }}
            value={Text}
           ></SearchBarGray>
        </View>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <Pressable style={styles.distanceBtn}>
            <Message />
          </Pressable>
          <Pressable style={styles.distanceBtn}>
            <Social onPress={onPressProfile} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
