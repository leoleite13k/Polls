import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  currentPoll: {},
  adding: false,
  loading: false,
  error: false,
};

export default function poll(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@poll/LOAD_POLL_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@poll/LOAD_POLL_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case '@poll/SELECT_POLL_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@poll/SELECT_POLL_SUCCESS': {
        draft.currentPoll = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case '@poll/ADD_POLL_REQUEST': {
        draft.adding = true;
        break;
      }

      case '@poll/ADD_POLL_SUCCESS': {
        draft.adding = false;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case '@poll/POLL_FAILURE': {
        draft.loading = false;
        draft.adding = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
