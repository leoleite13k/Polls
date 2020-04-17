export function addVoteRequest(data, navigation) {
  return {
    type: '@vote/ADD_VOTE_REQUEST',
    payload: { data, navigation },
  };
}

export function addVoteSuccess() {
  return {
    type: '@vote/ADD_VOTE_SUCCESS',
  };
}

export function voteFailure() {
  return {
    type: '@vote/VOTE_FAILURE',
  };
}
