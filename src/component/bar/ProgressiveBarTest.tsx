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

function ProgressBarTest() {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const totalStep = 4;
  const [nowStep, setNowStep] = useState(0);
  const load = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
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
          gestureState.dx,
          'ss',
          gestureState.vx,
          ' : vx',
          gestureState.x0,
        );
        if (gestureState.dx < 0 || gestureState.dx > 250) {
          return;
        }
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
      <View style={styles.barContainer}>
        <View style={styles.bar}>
          <Animated.View
            style={{
              zIndex: -1,
              backgroundColor: 'white',
              width,
              height: 5.2,

              borderWidth: 0,
            }}
          />

          <Animated.View
            id={'A2'}
            style={{
              zIndex: 2,
              backgroundColor: 'white',
              position: 'absolute',
              left: width,
              top: -5,
              width: 10,
              height: 20,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: 'white',
            }}
            {...PanResponder2.panHandlers}
          />
          <View
            style={{
              zIndex: 1,
              backgroundColor: `${nowStep >= 2 ? 'white' : 'black'}`,
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
              backgroundColor: `${nowStep >= 3 ? 'white' : 'black'}`,
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
              backgroundColor: `${nowStep >= 4 ? 'white' : 'black'}`,
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
              backgroundColor: 'black',
              position: 'absolute',
              left: 255,
              top: -5,
              width: 5,
              height: 15,
              borderRadius: 2,
              borderWidth: 0.5,
              borderColor: 'WHITE',
            }}
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    width: 250,
    height: 5.2,
    backgroundColor: 'black',
  },
  barContainer: {
    flexDirection: 'column',

    width: 260,
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
export default ProgressBarTest;
