/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useImperativeHandle, useRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../../../img/Search.svg';

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

            <Pressable
              style={{position: 'absolute', right: 10}}
              onPress={() => {
                console.log('kkkkk');
                onSubmitEditing();
              }}>
              <SearchIcon />
            </Pressable>
          </View>
        </View>
      </View>
    );
  },
);

export default SearchBarGray;
/*


*/
