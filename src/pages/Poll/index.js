import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconIo from 'react-native-vector-icons/Ionicons';

import { addVoteRequest } from '~/store/modules/vote/actions';

import { Container, Card, Question, Select, Answer } from './styles';

import Loader from '~/components/Loader';
import Button from '~/components/Button';

export default function Poll({ navigation }) {
  const [optionSelected, setOptionSelected] = useState(null);

  const currentPoll = useSelector((state) => state.poll.currentPoll);
  const loading = useSelector((state) => state.poll.loading);
  const adding = useSelector((state) => state.vote.adding);

  const dispatch = useDispatch();

  function handleSelectOption({ option_id }) {
    setOptionSelected(option_id);
  }

  function handleSendAnswer() {
    const { poll_id } = currentPoll;

    const data = {
      poll_id,
      option_id: optionSelected,
    };

    dispatch(addVoteRequest(data, navigation));
  }

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Card>
          <>
            <Question>{currentPoll.poll_description}</Question>
            {currentPoll.options.map((option) => (
              <Select
                key={option.option_id}
                onPress={() => handleSelectOption(option)}>
                {option.option_id === optionSelected ? (
                  <IconIo
                    name="ios-radio-button-on"
                    size={24}
                    color="#7159c1"
                  />
                ) : (
                  <IconIo
                    name="ios-radio-button-off"
                    size={24}
                    color="#7159c1"
                  />
                )}
                <Answer>{option.option_description}</Answer>
              </Select>
            ))}

            <Button
              onPress={handleSendAnswer}
              text={adding ? 'Respondendo...' : 'Responder'}
            />
          </>
        </Card>
      )}
    </Container>
  );
}
