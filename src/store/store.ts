import { createStore, combineReducers } from 'redux';
import { reducer as offers } from './offers/reducer';
import { composeWithDevTools } from "redux-devtools-extension/index";

const rootReducer = {
  offers: offers,
};

const combinedReducers = combineReducers(rootReducer);

export const store = createStore(combinedReducers, composeWithDevTools());
