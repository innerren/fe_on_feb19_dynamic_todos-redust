import { SET_TODOS } from "../actions/pageActions";
const initialState = {
  todos: [],
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: [...action.todos],
      };

    default:
      return state;
  }
}
