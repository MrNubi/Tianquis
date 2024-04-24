/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {View, Animated, PanResponder} from 'react-native';

const DragBox = () => {
  const [animatedX] = useState(new Animated.Value(0));

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        animatedX.setValue(gestureState.dx);
      },
      onPanResponderRelease: () => {
        Animated.spring(animatedX, {
          toValue: 0,
          friction: 7,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          transform: [{translateX: animatedX}],
        }}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default DragBox;
