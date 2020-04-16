import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from 'react-native-action-button';

import {
  loadPollRequest,
  selectPollRequest,
} from '~/store/modules/poll/actions';

import { Container, List, Card, Text } from './styles';

import ModalPoll from './ModalPoll';

import Loader from '~/components/Loader';

export default function Main({ navigation }) {
  const [visibleModalPoll, setVisibleModalPoll] = useState(false);

  const polls = useSelector((state) => state.poll.data);
  const loading = useSelector((state) => state.poll.loading);

  const dispatch = useDispatch();

  function handleSelectPoll({ poll_id }) {
    dispatch(selectPollRequest(poll_id));
    navigation.navigate('Poll');
  }

  function handleModalPoll() {
    setVisibleModalPoll(!visibleModalPoll);
  }

  useEffect(() => {
    dispatch(loadPollRequest());
  }, [dispatch]);

  return (
    <Container>
      {loading && polls.length === 0 ? (
        <Loader />
      ) : (
        <>
          <List
            keyExtractor={(item) => item.poll_id}
            data={polls}
            renderItem={({ item, index }) => (
              <Card onPress={() => handleSelectPoll(item)}>
                <Text>{item.poll_description}</Text>
              </Card>
            )}
          />

          <ActionButton buttonColor="#9681de" onPress={handleModalPoll} />
        </>
      )}

      {visibleModalPoll && (
        <ModalPoll visible={visibleModalPoll} handleModal={handleModalPoll} />
      )}
    </Container>
  );
}
