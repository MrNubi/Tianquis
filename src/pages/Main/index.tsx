/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import WhiteBtn from '../../component/btn/whiteBtn';
const Main = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#50B6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <WhiteBtn text="Sign In" />
    </View>
  );
};

export default Main;
