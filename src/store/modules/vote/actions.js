export function addVoteRequest(vote, navigation) {
  return {
    type: '@vote/ADD_VOTE_REQUEST',
    payload: { vote, navigation },
  };
}

export function addVoteSuccess(data) {
  return {
    type: '@vote/ADD_VOTE_SUCCESS',
    payload: { data },
  };
}

export function voteFailure() {
  return {
    type: '@vote/VOTE_FAILURE',
  };
}
