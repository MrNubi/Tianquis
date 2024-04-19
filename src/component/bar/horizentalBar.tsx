import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../pages/Main/MainStyles';
interface t {
  text: string;
}
function HorizentalBar({text}: t) {
  return (
    <View style={styles.horizentalBar}>
      <View style={styles.horizentalLine}></View>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Inter-Regular',
          fontSize: 13,
          lineHeight: 14,
          marginHorizontal: 7.5,

          //           font-family: Inter;
          // font-size: 12px;
          // font-weight: 400;
          // line-height: 14.52px;
          // text-align: center;
        }}>
        {text}
      </Text>
      <View style={styles.horizentalLine}></View>
    </View>
  );
}

export default HorizentalBar;
