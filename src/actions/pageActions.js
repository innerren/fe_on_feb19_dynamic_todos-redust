import { store } from "../store/configureStore";

export const SET_TODOS = "SET_TODOS";
export const SET_USERS = "SET_USERS";
export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";
export const REVERSE = "REVERSE";
export const SET_FILTERS = "SET_FILTERS";
export const APPLY_FILTER = "APPLY_FILTER";

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters: filters,
  };
};

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    todos: todos,
  };
};

export const startLoading = text => {
  return {
    type: START_LOADING,
    text: text,
  };
};

export const finishLoading = view => {
  return {
    type: FINISH_LOADING,
    view: view,
  };
};

export const setUsers = users => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const applyFilter = (arr = store.filters.filtred, filter) => {
  return {
    type: APPLY_FILTER,
    arr: arr,
    filter: filter,
  };
};
