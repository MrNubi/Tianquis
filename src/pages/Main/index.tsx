/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, Pressable, Text, TextInput, View} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Market from '../../img/Marcket.svg';
import styles from './MainStyles';
import HorizentalBar from '../../component/bar/horizentalBar';
import BlueInput from '../../component/inputBox/BlueInputText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Layout/AppInner';
import ProgressBar from '../../component/bar/ProgressBar';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

function Main({navigation}: MainScreenProps) {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [count, setCount] = useState(10);
  const PwRef = useRef<TextInput | null>(null);

  const navigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);
  const navigateToDistance = useCallback(() => {
    navigation.navigate('Distance');
  }, [navigation]);

  navigateToDistance();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#50B6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Market />

      <Text style={styles.font800}>Movil</Text>
      <Text style={styles.font800}>Tianguis</Text>
      <BlueInput
        placeHolder="ID"
        type="id"
        onChangeText={t => {
          setID(t);
        }}
        onSubmitEditing={() => {
          PwRef.current?.focus();
        }}
        value={id}
      />
      <BlueInput
        placeHolder="PW"
        type="pw"
        onChangeText={t => {
          setPW(t);
        }}
        onSubmitEditing={() => {
          console.log('login action', 'id :', id, ', pw : ', pw);
        }}
        value={pw}
        secureTextEntry
        returnKeyType="send"
        ref={PwRef}
      />
      <WhiteBtn text="Log in" />
      <HorizentalBar text="or" />

      <WhiteBtn
        text="Sign in"
        nev={() => {
          navigateToSignIn();
        }}
      />
    </View>
  );
}

export default Main;
