import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  loadPollSuccess,
  pollFailure,
  selectPollSuccess,
  addPollSuccess,
} from './actions';

import api from '~/services/api';

export function* loadPoll({ payload }) {
  try {
    const { data } = yield call(api.get, 'poll');

    yield put(loadPollSuccess(data));
  } catch (error) {
    Alert.alert('Falha ao carregar', 'Falha ao carregar as enquetes');
    yield put(pollFailure());
  }
}

export function* selectPoll({ payload }) {
  try {
    const { id } = payload;

    const { data } = yield call(api.get, `poll/${id}`);

    yield put(selectPollSuccess(data));
  } catch (error) {
    Alert.alert('Falha ao carregar', 'Falha ao carregar a enquete');
    yield put(pollFailure());
  }
}

export function* addPoll({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'poll', data);
    yield put(addPollSuccess());
  } catch (error) {
    Alert.alert('Fala ao cadastrar', 'Falha ao cadastrar enquete');
    yield put(pollFailure());
  }
}

export default all([
  takeLatest('@poll/LOAD_POLL_REQUEST', loadPoll),
  takeLatest('@poll/SELECT_POLL_REQUEST', selectPoll),
  takeLatest('@poll/ADD_POLL_REQUEST', addPoll),
]);
