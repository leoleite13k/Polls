import { all } from 'redux-saga/effects';

import poll from './poll/sagas';
import vote from './vote/sagas';
import stats from './stats/sagas';

export default function* rootSaga() {
  yield all([poll, vote, stats]);
}
