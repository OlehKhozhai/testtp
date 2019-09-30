import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { testReducer } from "./reducers/testReducer";

const rootReducer = combineReducers({
  test: testReducer
});

const enhancer = applyMiddleware(thunk);

export type IAppStore = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
