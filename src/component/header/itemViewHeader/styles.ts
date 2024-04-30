/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  innerContainer: {
    flexDirection: 'row',
    height: 36,
    width: '100%',
    justifyContent: 'space-between',
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
