/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Layout/AppInner';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

function Main({navigation}: MainScreenProps) {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [count, setCount] = useState(10);
  const PwRef = useRef<TextInput | null>(null);

  const navigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);
  // const navigateToMakeingZone = useCallback(() => {
  //   navigation.navigate('Distance');
  // }, [navigation]);

  // navigateToMakeingZone();

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#50B6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    
     
    </View>
  );
}

export default Main;
