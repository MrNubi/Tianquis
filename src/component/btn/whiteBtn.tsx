/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from '../../pages/Main/MainStyles';
interface t {
  text: string;
  nev?: () => void;
}
function WhiteBtn({text, nev}: t) {
  return (
    <Pressable onPress={nev} style={styles.whiteBtn}>
      <Text
        style={{
          color: '#005B9D',
          fontWeight: '600',
          fontFamily: 'Inter-SemiBold',
          fontSize: 20,
        }}>
        {text}
      </Text>
    </Pressable>
  );
}

export default WhiteBtn;
