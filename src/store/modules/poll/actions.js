export function loadPollRequest() {
  return {
    type: '@poll/LOAD_POLL_REQUEST',
  };
}

export function loadPollSuccess(data) {
  return {
    type: '@poll/LOAD_POLL_SUCCESS',
    payload: { data },
  };
}

export function selectPollRequest(id) {
  return {
    type: '@poll/SELECT_POLL_REQUEST',
    payload: { id },
  };
}

export function selectPollSuccess(data) {
  return {
    type: '@poll/SELECT_POLL_SUCCESS',
    payload: { data },
  };
}

export function addPollRequest(data) {
  return {
    type: '@poll/ADD_POLL_REQUEST',
    payload: { data },
  };
}

export function addPollSuccess() {
  return {
    type: '@poll/ADD_POLL_REQUEST',
  };
}

export function pollFailure() {
  return {
    type: '@poll/ADD_POLL_FAILURE',
  };
}
