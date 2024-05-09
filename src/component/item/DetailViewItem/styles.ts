/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const widthABS = Math.floor(width);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: widthABS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  titleImg: {
    width: widthABS - 20,
    height: widthABS - 20,
    backgroundColor: 'white',
  },
});
export default styles;
