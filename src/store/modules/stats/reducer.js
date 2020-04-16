import produce from 'immer';

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

export default function stats(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@stats/LOAD_STATS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@stats/LOAD_STATS_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case '@stats/STATS_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
