/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImg: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
  },
  contentArea: {
    height: 60,
    width: 225,
  },
  contentText1: {
    height: 20,
    width: 225,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    lineHeight: 18.25,
  },
  contentText2: {
    height: 20,
    width: 225,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    lineHeight: 12.25,
  },
  statusArea: {
    height: 40,
    width: 225,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
