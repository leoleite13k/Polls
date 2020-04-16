import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';

import { addPollRequest } from '~/store/modules/poll/actions';

import {
  Container,
  Wrapper,
  Form,
  TextInput,
  ContentOption,
  ContentInput,
  Scroll,
  Row,
  Option,
  TextOption,
  Button,
  ButtonSend,
  TextButton,
} from './styles';

import HeaderModal from '~/components/HeaderModal';

export default function ModalPoll({ visible, handleModal }) {
  const [question, setQuestion] = useState('');
  const [currentOption, setCurrentOption] = useState('');
  const [listOptions, setListOptions] = useState([]);

  const adding = useSelector((state) => state.poll.adding);

  const dispatch = useDispatch();

  function handleAddListOptions() {
    if (listOptions.find((option) => option === currentOption)) {
      Alert.alert('Opção repetida', 'Opção já existente');
      return;
    }

    if (
      currentOption === '' ||
      currentOption === null ||
      currentOption === undefined
    ) {
      return;
    }

    setListOptions([...listOptions, currentOption]);
    setCurrentOption('');
  }

  function handleRemoveListOptions(item) {
    const newListOptions = listOptions.filter((option) => option !== item);

    setListOptions(newListOptions);
  }

  function handleAddPoll() {
    if (listOptions.length < 2) {
      Alert.alert('Opções inválidas', 'Insira pelo menos 2 opções');
      return;
    }

    if (question === '' || question === null || question === undefined) {
      Alert.alert('Pergunta inexistente', 'Digite a pergunta');
      return;
    }

    const newPoll = {
      poll_description: question,
      options: listOptions,
    };

    dispatch(addPollRequest(newPoll, handleModal));
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <Container>
        <HeaderModal title="Nova Enquete" handleModal={handleModal} />

        <Wrapper>
          <Form>
            <TextInput
              placeholder="Pergunta"
              multiline
              autoFocus
              onChangeText={(text) => setQuestion(text)}
            />

            <ContentOption>
              <ContentInput>
                <TextInput
                  placeholder="Opção"
                  onChangeText={(text) => setCurrentOption(text)}
                  value={currentOption}
                />
              </ContentInput>
              <Button onPress={handleAddListOptions}>
                <IconIo name="ios-add" size={32} color="#7159c1" />
              </Button>
            </ContentOption>
          </Form>

          <Scroll>
            {listOptions.map((option) => (
              <Row key={String(option)}>
                <Option>
                  <TextOption>{option}</TextOption>
                </Option>
                <Button onPress={() => handleRemoveListOptions(option)}>
                  <IconAnt name="delete" size={20} color="#7159c1" />
                </Button>
              </Row>
            ))}
            <ButtonSend
              disabled={listOptions.length === 0}
              onPress={handleAddPoll}>
              <TextButton>{adding ? 'Cadastrando...' : 'Cadastrar'}</TextButton>
            </ButtonSend>
          </Scroll>
        </Wrapper>
      </Container>
    </Modal>
  );
}
