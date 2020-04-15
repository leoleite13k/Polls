import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { Container, Load, Ball } from './styles';

export default function Loader() {
  const [width1] = useState(new Animated.Value(0));
  const [width2] = useState(new Animated.Value(0));
  const [width3] = useState(new Animated.Value(0));
  const [color1] = useState(new Animated.Value(0));
  const [color2] = useState(new Animated.Value(0));
  const [color3] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // 1 Sequencia
        Animated.timing(color1, {
          toValue: 100,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color2, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color3, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(width1, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width2, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width3, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),

        // 2 Sequencia
        Animated.timing(color1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color2, {
          toValue: 100,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color3, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(width1, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width2, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width3, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),

        // 3 Sequencia
        Animated.timing(color1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color2, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(color3, {
          toValue: 100,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(width1, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width2, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(width3, {
          toValue: 100,
          duration: 300,
          useNativeDriver: false,
        }),

        // Zerando tudo
        Animated.timing(color3, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(width3, {
          toValue: 0,
          duration: 900,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [color1, color2, color3, width1, width2, width3]);

  return (
    <Container>
      <Load>Carregando</Load>
      <Animated.View
        style={[
          Ball,
          {
            backgroundColor: color1.interpolate({
              inputRange: [0, 100],
              outputRange: ['#ccc', '#9681de'],
              extrapolate: 'clamp',
            }),
            width: width1.interpolate({
              inputRange: [0, 100],
              outputRange: [12, 40],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          Ball,
          {
            backgroundColor: color2.interpolate({
              inputRange: [0, 100],
              outputRange: ['#ccc', '#9681de'],
              extrapolate: 'clamp',
            }),
            width: width2.interpolate({
              inputRange: [0, 100],
              outputRange: [12, 40],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          Ball,
          {
            backgroundColor: color3.interpolate({
              inputRange: [0, 100],
              outputRange: ['#ccc', '#9681de'],
              extrapolate: 'clamp',
            }),
            width: width3.interpolate({
              inputRange: [0, 100],
              outputRange: [12, 40],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </Container>
  );
}
