import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { todosReducer } from "./todos";
import { generalReducer } from "./general";
import { filtersReducer } from "./filters";
import { routerReducer } from "react-router-redux";

export const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer,
  general: generalReducer,
  filters: filtersReducer,
  routing: routerReducer,
});
