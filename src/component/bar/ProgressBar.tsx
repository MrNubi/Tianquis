/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  PanResponder,
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';

interface IStep {
  totalStep: number;
}

const ProgressBar: React.FC<IStep> = ({totalStep}: IStep) => {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const [nowStep, setnowStep] = useState(1);
  const load = (count: number) => {
    console.log((count / totalStep) * 10, 'hh');
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 10,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const [animatedX] = useState(new Animated.Value(0));

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        let movedXabs = Math.round(gestureState.dx);
        console.log(gestureState.dx, 'ss', movedXabs);
        if (movedXabs < 0 || movedXabs > 250) {
          return;
        }

        setnowStep(movedXabs);
        animatedX.setValue(movedXabs);
      },

      onPanResponderRelease: (
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        let movedXabs = Math.round(gestureState.dx);

        let counted = movedXabs < 0 ? 0 : movedXabs > 250 ? 250 : movedXabs;
        let countedAbs = Math.round((counted / 250) * 100);
        Animated.spring(animatedX, {
          toValue: 0,
          friction: 7,
          useNativeDriver: false,
        }).start();
        console.log(countedAbs, 'd');
        load(countedAbs);
      },
    }),
  ).current;

  return (
    <View>
      <View style={styles.bar}>
        <Animated.View
          id={'A1'}
          style={{
            position: 'absolute',
            top: 0,
            backgroundColor: 'white',
            width,
            height: 5.2,
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
            borderColor: 'red',
            borderWidth: 1,
          }}
        />
        <Animated.View
          id={'A2'}
          style={{
            position: 'relative',
            top: 0,
            left: width,
            backgroundColor: 'blue',

            width: 10,
            height: 10,

            borderRadius: 2,
            borderWidth: 0.5,
            borderColor: 'black',
            transform: [{translateX: animatedX}],
          }}
          {...panResponder.panHandlers}
        />
      </View>
      <Text style={styles.step}>
        {nowStep}/{totalStep}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bar: {
    width: 242,
    height: 5.2,
    backgroundColor: 'black',
  },
  step: {
    color: 'black',
    fontWeight: '400',
    fontSize: 22,
    padding: 22,
    lineHeight: 22 * 1.3,
    textAlign: 'center',
  },
  circle: {
    position: 'absolute',
  },
});
export default ProgressBar;
