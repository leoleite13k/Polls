import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { addVoteSuccess, voteFailure } from './actions';

import api from '~/services/api';

export function* addVote({ payload }) {
  try {
    const { vote, navigation } = payload;
    const { poll_id, ...newVote } = vote;

    yield call(api.post, `poll/${poll_id}/vote`, newVote);
    yield put(addVoteSuccess(newVote));

    navigation.navigate('Stats');
  } catch (error) {
    Alert.alert('Erro ao cadastrar', 'Falha ao cadastrar o voto');
    yield put(voteFailure());
  }
}

export default all([takeLatest('@vote/ADD_VOTE_REQUEST', addVote)]);
