export function loadStatsRequest(poll_id) {
  return {
    type: '@stats/LOAD_STATS_REQUEST',
    payload: { poll_id },
  };
}

export function loadStatsSuccess(data) {
  return {
    type: '@stats/LOAD_STATS_SUCCESS',
    payload: { data },
  };
}

export function statsFailure() {
  return {
    type: '@stats/STATS_FAILURE',
  };
}
