import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  loadPollRequest,
  pollFailure,
  loadPollSuccess,
  selectPollSuccess,
  addPollSuccess,
} from './actions';

import api from '~/services/api';

export function* loadPoll({ payload }) {
  try {
    const { data } = yield call(api.get, 'poll');

    yield put(loadPollSuccess(data));
  } catch (error) {
    Alert.alert('Erro ao carregar', 'Falha ao carregar as enquetes');
    yield put(pollFailure());
  }
}

export function* selectPoll({ payload }) {
  try {
    const { id, navigation, screen } = payload;

    const { data } = yield call(api.get, `poll/${id}`);

    yield put(selectPollSuccess(data));

    if (screen) {
      navigation.navigate(screen, { home: screen === 'Stats' });
    }
  } catch (error) {
    Alert.alert('Erro ao carregar', 'Falha ao carregar a enquete');
    yield put(pollFailure());
  }
}

export function* addPoll({ payload }) {
  try {
    const { data, handleModal } = payload;

    yield call(api.post, 'poll', data);
    yield put(addPollSuccess());

    handleModal();
    yield setTimeout(() => {
      Alert.alert('Cadastrada', 'Enquete cadastrada com sucesso!');
    }, 500);

    yield put(loadPollRequest());
  } catch (error) {
    Alert.alert('Erro ao cadastrar', 'Falha ao cadastrar enquete');
    yield put(pollFailure());
  }
}

export default all([
  takeLatest('@poll/LOAD_POLL_REQUEST', loadPoll),
  takeLatest('@poll/SELECT_POLL_REQUEST', selectPoll),
  takeLatest('@poll/ADD_POLL_REQUEST', addPoll),
]);
