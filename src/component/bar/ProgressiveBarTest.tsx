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
  Pressable,
} from 'react-native';
import storage from '../../mmkv';

interface props {
  setDistanceText?: (t: string) => void | undefined;
}

function ProgressBarTest({setDistanceText}: props) {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const totalStep = 4;
  const [nowStep, setNowStep] = useState(0);
  const [colorStep, setColorStep] = useState(0);
  const [animatedX] = useState(new Animated.Value(0));

  storage.set('distance', `${nowStep}`);

  const load = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setColorStep(nowStep);
      storage.set('distance', `${nowStep}`);
      if (setDistanceText != undefined) {
        setDistanceText(`${nowStep}`);
        console.log('setDT', `${nowStep}`);
      }
    });
  };

  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const PanResponder2 = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        let movedXabs = Math.round(gestureState.dx);
        console.log(
          'dx : ',
          gestureState.dx,
          ', vx :',
          gestureState.vx,
          ', x0 : ',
          gestureState.x0,
        );

        animatedX.setValue(movedXabs);
      },

      onPanResponderRelease: (
        e: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        let movedXabs = Math.abs(gestureState.dx);

        let Xabs = (gestureState.dx * 2) / 125;
        let movedXCount = Math.round(Xabs);
        setNowStep(p => {
          let counter = p + movedXCount;
          let counterSeter = counter <= 0 ? 0 : counter >= 4 ? 4 : counter;
          return counterSeter;
        });
        console.log(
          movedXabs,
          'absh',
          movedXCount,
          'sdf',
          gestureState.x0,
          gestureState.vx,
          gestureState.moveX,
        );
        animatedX.setValue(0);
      },
    }),
  ).current;
  const textPress = () => {
    setNowStep(p => {
      let p2 = p == 4 ? 0 : ++p;
      return p2;
    });
  };
  let DistanceText =
    nowStep < 3 ? `${nowStep * 5}km` : nowStep == 3 ? '25km ' : 'unlimited';

  useEffect(() => {
    load(nowStep);
  }, [nowStep]);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Animated.View
          style={{
            zIndex: -1,
            backgroundColor: '#50B6FF',
            width,
            height: 5.2,

            borderWidth: 0,
          }}
        />

        <Animated.View
          id={'A2'}
          style={{
            zIndex: 2,
            backgroundColor: '#50B6FF',
            position: 'absolute',
            left: width,
            top: -5,
            width: 10,
            height: 20,
            borderRadius: 3,
            borderWidth: 0,
            transform: [{translateX: animatedX}],
          }}
          {...PanResponder2.panHandlers}
        />
        <View
          style={{
            zIndex: 1,
            backgroundColor: `${colorStep >= 1 ? '#50B6FF' : 'black'}`,
            position: 'absolute',
            left: 63,
            top: -5,
            width: 5,
            height: 15,
            borderRadius: 2,
            borderWidth: 0,
          }}
        />
        <View
          style={{
            zIndex: 1,
            backgroundColor: `${colorStep >= 2 ? '#50B6FF' : 'black'}`,
            position: 'absolute',
            left: 125.5,
            top: -5,
            width: 5,
            height: 15,
            borderRadius: 2,
            borderWidth: 0,
          }}
        />
        <View
          style={{
            zIndex: 1,
            backgroundColor: `${colorStep >= 3 ? '#50B6FF' : 'black'}`,
            position: 'absolute',
            left: 188,
            top: -5,
            width: 5,
            height: 15,
            borderRadius: 2,
            borderWidth: 0,
          }}
        />
        <View
          style={{
            zIndex: 1,
            backgroundColor: `${colorStep >= 4 ? '#50B6FF' : 'black'}`,
            position: 'absolute',
            left: 250,
            top: -5,
            width: 5,
            height: 15,
            borderRadius: 2,
            borderWidth: 0,
            borderColor: 'WHITE',
          }}
        />
      </View>
      <Pressable onPress={textPress}>
        <Text style={styles.step}>{DistanceText}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    width: 250,
    height: 5.2,
    backgroundColor: 'black',
    borderWidth: 0,
  },
  barContainer: {
    flexDirection: 'column',

    width: 260,
    height: 5.2,
    backgroundColor: 'w',
  },
  step: {
    width: 150,
    height: 24,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 22 * 1.3,
    textAlign: 'center',
  },
  circle: {
    position: 'absolute',
  },
});
export default ProgressBarTest;
