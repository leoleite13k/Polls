import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconIo from 'react-native-vector-icons/Ionicons';

import { loadPollRequest } from '~/store/modules/poll/actions';

import { Container, Button } from './styles';

export default function HeaderRight() {
  const [rotation] = useState(new Animated.Value(0));

  const loading = useSelector((state) => state.poll.loading);
  const error = useSelector((state) => state.poll.error);

  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(loadPollRequest());

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 1,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  useEffect(() => {
    if (error && !loading) {
      rotation.stopAnimation();
    }
  }, [error, loading, rotation]);

  return (
    <Container>
      {error && (
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}>
          <Button disabled={loading} onPress={handleUpdate}>
            <IconIo name="ios-refresh" size={22} color="#fff" />
          </Button>
        </Animated.View>
      )}
    </Container>
  );
}
