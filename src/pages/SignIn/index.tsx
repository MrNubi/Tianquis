/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Market from '../../img/Marcket.svg';

import BlueInput from '../../component/inputBox/BlueInputText';
import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInScreenProps) => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [EmailMod, setEmailMod] = useState(false);

  const pwRef = useRef<TextInput | null>(null);
  const nicknameRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);

  const ModChanger = useCallback(() => {
    setEmailMod(p => !p);
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#50B6FF',
        paddingTop: 94,

        alignItems: 'center',
      }}>
      <Market />
      <View
        style={{
          width: '100%',
          height: 210,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: `${EmailMod ? `none` : 'flex'}`,
          marginVertical: 75,
        }}>
        <BlueInput
          placeHolder="ID"
          type="id"
          onChangeText={t => {
            setID(t);
          }}
          onSubmitEditing={() => {
            pwRef.current?.focus();
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
            nicknameRef.current?.focus();
          }}
          value={pw}
          secureTextEntry
          ref={pwRef}
        />
        <BlueInput
          placeHolder="nickname"
          type="nickname"
          onChangeText={t => {
            setNickname(t);
          }}
          onSubmitEditing={() => {
            emailRef.current?.focus();
          }}
          value={Nickname}
          ref={nicknameRef}
        />
        <BlueInput
          placeHolder="email"
          type="email"
          onChangeText={t => {
            setEmail(t);
          }}
          onSubmitEditing={() => {}}
          value={Email}
          returnKeyType="send"
          ref={emailRef}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 210,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: `${EmailMod ? `flex` : 'none'}`,
          marginVertical: 75,
        }}>
        <Text>Anota tu código de Verificación</Text>
        <Text>que te enviamos a tu E-mail.</Text>
      </View>

      <WhiteBtn
        text="Sign in"
        nev={() => {
          ModChanger();
        }}
      />
    </View>
  );
};

export default SignIn;
