/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 94,

    alignItems: 'center',
  },
  contentBox: {
    width: '100%',
    height: 210,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 75,
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
  listoText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    lineHeight: 18.25,
  },
});

export default styles;
