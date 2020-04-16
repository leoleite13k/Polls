import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, List, Card, Text } from './styles';

import Loader from '~/components/Loader';
import {
  loadPollRequest,
  selectPollRequest,
} from '~/store/modules/poll/actions';

export default function Main({ navigation }) {
  const polls = useSelector((state) => state.poll.data);
  const loading = useSelector((state) => state.poll.loading);

  const dispatch = useDispatch();

  function handleSelectPoll({ poll_id }) {
    dispatch(selectPollRequest(poll_id));
    navigation.navigate('Poll');
  }

  useEffect(() => {
    dispatch(loadPollRequest());
  }, [dispatch]);

  return (
    <Container>
      {loading && polls.length === 0 ? (
        <Loader />
      ) : (
        <List
          keyExtractor={(item) => item.poll_id}
          data={polls}
          renderItem={({ item, index }) => (
            <Card onPress={() => handleSelectPoll(item)}>
              <Text>{item.poll_description}</Text>
            </Card>
          )}
        />
      )}
    </Container>
  );
}
