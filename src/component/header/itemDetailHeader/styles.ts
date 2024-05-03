/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: 111,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  innerContainer1: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer2: {
    flexDirection: 'row',
    height: 31,
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: 14,
  },
  distanceText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
    lineHeight: 36.25,
  },
  distanceBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: '100%',
  },
});

export default styles;
