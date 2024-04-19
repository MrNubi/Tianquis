/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useImperativeHandle, useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
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

interface props {
  placeHolder: string;
  type?: string;
  secureTextEntry?: boolean;
  returnKeyType?: string;
  onChangeText: (t: string) => void;
  onSubmitEditing: () => void;
  value: string;
}

const BlueInput = React.forwardRef(
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
          borderWidth: 1,
          backgroundColor: '#005B9D80',
          marginVertical: 10,
          borderColor: '#015693',
        }}>
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          placeholderTextColor="white"
          importantForAutofill="yes"
          autoComplete={
            type == 'id'
              ? 'username'
              : type == 'email'
              ? 'email'
              : type == 'nickname'
              ? 'nickname'
              : undefined
          }
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

export default BlueInput;
