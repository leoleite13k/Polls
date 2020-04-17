import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { loadStatsSuccess, statsFailure } from './actions';

import api from '~/services/api';

export function* loadStats({ payload }) {
  try {
    const { poll_id } = payload;

    const { data } = yield call(api.get, `poll/${poll_id}/stats`);

    yield put(loadStatsSuccess(data));
  } catch (error) {
    Alert.alert('Erro ao carregar', 'Falha ao carregar a estatística');
    yield put(statsFailure());
  }
}

export default all([takeLatest('@stats/LOAD_STATS_REQUEST', loadStats)]);
