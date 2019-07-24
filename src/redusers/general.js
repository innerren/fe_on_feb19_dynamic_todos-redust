import { FINISH_LOADING, START_LOADING } from "../actions/pageActions";

const initialState = {
  text: "",
  view: "",
};

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        view: "",
        text: action.text,
      };

    case FINISH_LOADING:
      return {
        ...state,
        view: action.view,
        text: "",
      };

    default:
      return state;
  }
}
