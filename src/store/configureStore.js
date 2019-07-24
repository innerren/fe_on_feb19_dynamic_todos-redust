import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../redusers";

export const store = createStore(rootReducer, composeWithDevTools());
