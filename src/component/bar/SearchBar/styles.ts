/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    backgroundColor: '#E8E8E8',
    height: 50,
  },
  innerView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  searchBar: {
    width: '90%',
    height: 25,

    backgroundColor: '#E8E8E8',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    padding: 5,
    textAlign: 'center',
    color: 'white',
    width: 200,
    fontFamily: 'Inter-SemiBold',
    height: 25,
  },
  textInput: {
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
