/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  container2: {
    borderRadius: 4,
    width: '95%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  titleImg: {
    width: 100,
    height: 100,
    backgroundColor: '#D9D9D9',
    marginRight: 10,
  },
  contentArea: {
    height: 70,
    width: 225,

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
    color: 'gray',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    lineHeight: 12.25,
  },
  littleTxt1: {
    marginLeft: 5,
    width: 24,
    height: 12,
    textAlign: 'center',
    color: '#A4A4A4',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    lineHeight: 12.1,
  },
  littleTxt2: {
    width: 20,
    height: 12,
    textAlign: 'center',

    color: '#A4A4A4',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    lineHeight: 12.1,
  },
  statusArea: {
    height: 30,
    width: 225,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
