import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from 'react-native-action-button';

import {
  loadPollRequest,
  selectPollRequest,
} from '~/store/modules/poll/actions';

import { Container, List, Card, Text, Load } from './styles';

import ModalPoll from './ModalPoll';
import Loader from '~/components/Loader';

const pageSize = 20;

export default function Main({ navigation }) {
  const [page, setPage] = useState(1);
  const [listPolls, setListPolls] = useState([]);
  const [visibleModalPoll, setVisibleModalPoll] = useState(false);

  const polls = useSelector((state) => state.poll.data);
  const loading = useSelector((state) => state.poll.loading);

  const dispatch = useDispatch();

  function renderFooter() {
    if (!loading && listPolls.length < pageSize) {
      return null;
    }
    return (
      <Load>
        <ActivityIndicator size="large" color="#fff" />
      </Load>
    );
  }

  function handleSelectPoll({ poll_id }) {
    dispatch(selectPollRequest(poll_id));
    navigation.navigate('Poll');
  }

  function handleModalPoll() {
    setVisibleModalPoll(!visibleModalPoll);
  }

  function handleLoadMore() {
    const currentPage = page + 1;

    const newPolls = polls.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    setPage(currentPage);
    setListPolls([...listPolls, ...newPolls]);
  }

  useEffect(() => {
    dispatch(loadPollRequest());
  }, [dispatch]);

  useEffect(() => {
    setListPolls(polls.slice(0, pageSize));
    setPage(1);
  }, [polls]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <List
            data={listPolls}
            keyExtractor={(item) => String(item.poll_id)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => (
              <Card onPress={() => handleSelectPoll(item)}>
                <Text>{item.poll_description}</Text>
              </Card>
            )}
            ListFooterComponent={renderFooter}
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
