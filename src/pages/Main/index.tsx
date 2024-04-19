/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Market from '../../img/Marcket.svg';
import styles from './MainStyles';
import HorizentalBar from '../../component/bar/horizentalBar';
import BlueInput from '../../component/inputBox/BlueInputText';
const Main = () => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
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
        onSubmitEditing={() => {}}
        value={id}
      />
      <BlueInput
        placeHolder="PW"
        type="pw"
        onChangeText={t => {
          setPW(t);
        }}
        onSubmitEditing={() => {}}
        value={pw}
        secureTextEntry
        returnKeyType="send"
      />
      <WhiteBtn text="Log in" />
      <HorizentalBar text="or" />

      <WhiteBtn text="Sign in" />
    </View>
  );
};

export default Main;
