/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: -1,
  },
  background2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: -2,
  },
  homeIcon: {
    position: 'absolute',
    top: 50,
  },
  mT: {
    marginTop: 24,
  },
  orBar: {
    borderTopWidth: 1,
    borderTopColor: '#B5B5B5',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24.43,
    width: 190,
    height: 20,
    textAlign: 'center',
    marginTop: 12,
  },

  loginBtn: {
    width: 260,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF852C',
    marginTop: 14,
  },
  whiteBtn: {
    width: 260,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 14,
  },
  horizentalBar: {
    width: '100%',
    height: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 14,
  },
  horizentalLine: {
    backgroundColor: 'white',
    width: 100,
    borderColor: 'white',
    borderWidth: 1,
  },

  font800: {
    color: 'white',
    fontFamily: 'Inter-ExtraBold',
    fontSize: 35,
    lineHeight: 42,
  },
});
export default styles;
