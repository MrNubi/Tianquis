/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {Text, TextInput, View, ViewComponent} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
import Market from '../../img/Marcket.svg';

import BlueInput from '../../component/inputBox/BlueInputText';
import {RootStackParamList} from '../../Layout/AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './SignStyle';
import BlueOneInput from '../../component/inputBox/BlueOneTextInput';
import ProgressBar from '../../component/bar/ProgressBar';
import Distance from '../Distance';

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
  const codeRef0 = useRef<TextInput | null>(null);
  const codeRef1 = useRef<TextInput | null>(null);
  const codeRef2 = useRef<TextInput | null>(null);
  const codeRef3 = useRef<TextInput | null>(null);
  let codeArr: Array<string> = [];
  const TextMod = useCallback(() => {
    setEmailMod(p => !p);
  }, []);
  const navigateToDistance = useCallback(() => {
    navigation.navigate('Distance');
  }, [navigation]);

  const CodeMod = () => {
    setEmailMod(p => !p);
    console.log(codeArr[0], codeArr[1], codeArr[2], codeArr[3]);
    navigateToDistance();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Market />
        {EmailMod ? (
          <View style={styles.contentBox}>
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
        ) : (
          <View style={styles.contentBox2}>
            <Text style={styles.emailText}>
              Anota tu código de Verificación{`\n`}
              {`\n`}
              {`\n`}que te enviamos a tu E-mail.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: 250,
                height: 80,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <BlueOneInput
                placeHolder=""
                onChangeText={t => {
                  codeArr[0] = t;
                  codeRef1.current?.focus();
                }}
                onSubmitEditing={() => {}}
                ref={codeRef0}
              />
              <BlueOneInput
                placeHolder=""
                onChangeText={t => {
                  codeArr[1] = t;
                  codeRef2.current?.focus();
                }}
                onSubmitEditing={() => {}}
                ref={codeRef1}
              />
              <BlueOneInput
                placeHolder=""
                onChangeText={t => {
                  codeArr[2] = t;
                  codeRef3.current?.focus();
                }}
                onSubmitEditing={() => {}}
                ref={codeRef2}
              />
              <BlueOneInput
                placeHolder=""
                onChangeText={t => {
                  codeArr[3] = t;
                }}
                returnKeyType="send"
                onSubmitEditing={() => {}}
                ref={codeRef3}
              />
            </View>
          </View>
        )}

        <WhiteBtn
          text="Sign in"
          nev={() => {
            EmailMod ? TextMod() : CodeMod();
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;
/*


*/
