/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import BwGradetion from '../../../img/GradetionBw.svg';

function BannerBar() {
  return (
    <View style={styles.container}>
      <BwGradetion style={{position: 'absolute'}} />
      <Text style={styles.innerText}>¿Quieres vender algo? haga clic aquí</Text>
    </View>
  );
}

export default BannerBar;
