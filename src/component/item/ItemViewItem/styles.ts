/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleImg: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
  },
  contentArea: {
    height: 60,
    width: 225,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  contentText1: {
    height: 18,
    width: 225,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    lineHeight: 18.25,
    alignItems: 'center',
  },
  contentText2: {
    height: 15,
    width: 225,
    textAlign: 'left',
    color: 'gray',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    lineHeight: 12.25,
    alignItems: 'center',
  },
  statusArea: {
    paddingLeft: 10,
    height: 40,
    width: 225,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
