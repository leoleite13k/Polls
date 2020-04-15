import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, Card, Text } from './styles';

import api from '~/services/api';
import Loader from '~/components/Loader';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [polls, setPolls] = useState([]);

  async function getPolls() {
    const { data } = await api.get('poll');

    setPolls(data);
    setLoading(false);
  }

  useEffect(() => {
    getPolls();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={(item) => item.poll_id}
          data={polls}
          renderItem={({ item, index }) => (
            <Card onPress={() => {}}>
              <Text>{item.poll_description}</Text>
            </Card>
          )}
        />
      )}
    </Container>
  );
}
