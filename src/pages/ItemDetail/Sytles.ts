/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '',
    alignItems: 'center',
  },
  container2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gry',
    alignItems: 'center',
  },
  contentBox: {
    width: '100%',
    height: 210,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 75,
    backgroundColor: 'white',
  },
  contentBox2: {
    width: '100%',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 75,
  },
  distanceText: {
    marginTop: 25,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
    lineHeight: 36,
    marginBottom: 76,
  },
  listo: {
    marginTop: 36,
    width: 80,
    height: 30,
    backgroundColor: '#50B6FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descView: {
    width: '100%',
    height: 100,
  },
  descText: {
    color: 'Black',
    fontFamily: 'Inter-SemiBold',

    textAlign: 'left',
    fontSize: 15,
    lineHeight: 18,
  },
  TitleText: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
    lineHeight: 36.25,
    marginLeft: 10,
  },
  TitleView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
});

export default styles;
