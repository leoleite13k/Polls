import { combineReducers } from 'redux';

import poll from './poll/reducer';
import vote from './vote/reducer';
import stats from './stats/reducer';

export default combineReducers({ poll, vote, stats });
