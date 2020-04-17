import produce from 'immer';

const INITIAL_STATE = {
  data: {},
  adding: false,
  error: false,
};

export default function vote(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@vote/ADD_VOTE_REQUEST': {
        draft.adding = true;
        break;
      }

      case '@vote/ADD_VOTE_SUCCESS': {
        draft.data = action.payload.data;
        draft.adding = false;
        draft.error = false;
        break;
      }

      case '@vote/VOTE_FAILURE': {
        draft.adding = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
