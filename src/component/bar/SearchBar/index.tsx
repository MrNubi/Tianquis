/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useImperativeHandle, useRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../../img/Search.svg';
import TrasnsparentInput from '../../inputBox/TransparentInput';

interface props {
  placeHolder: string;
  type?: string;
  secureTextEntry?: boolean;
  returnKeyType?: string;
  onChangeText: (t: string) => void;
  onSubmitEditing: () => void;
  value: string;
}

const SearchBarGray = React.forwardRef(
  (
    {
      placeHolder,
      type,
      secureTextEntry,
      returnKeyType,
      onChangeText,
      value,
      onSubmitEditing,
    }: props,
    ref,
  ) => {
    const refHere = useRef<TextInput>(null);

    useImperativeHandle(ref, () => refHere.current as TextInput);

    return (
      <View
        style={{
          width: 250,
          height: 30,
          borderWidth: 0,
          backgroundColor: 'transparent',
          marginVertical: 10,
        }}>
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          placeholderTextColor="white"
          onChangeText={onChangeText}
          value={value}
          textContentType={type == 'pw' ? 'password' : 'none'}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType == 'send' ? 'send' : 'next'}
          clearButtonMode="while-editing"
          onSubmitEditing={onSubmitEditing}
          ref={refHere}
        />
      </View>
    );
  },
);

export default SearchBarGray;
/*
      <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          placeholderTextColor="white"
          onChangeText={onChangeText}
          value={value}
          textContentType={type == 'pw' ? 'password' : 'none'}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType == 'send' ? 'send' : 'next'}
          clearButtonMode="while-editing"
          onSubmitEditing={onSubmitEditing}
          ref={refHere}
        />
          
          <Pressable style={{position: 'relative', left: 50}}>
            <SearchIcon />
          </Pressable>
        </View>
      </View>
    </View>


*/
