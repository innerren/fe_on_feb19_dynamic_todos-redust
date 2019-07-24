import { SET_USERS } from "../actions/pageActions";
const initialState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    default:
      return state;
  }
}
