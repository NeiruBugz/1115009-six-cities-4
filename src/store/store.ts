import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { reducer as offers } from './offers/reducer';
import { createAPI } from "../shared/api";

const rootReducer = {
  offers: offers,
};

const combinedReducers = combineReducers(rootReducer);

const api = createAPI();

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);
