import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {reducer as offers} from './offers/reducer';
import {reducer as data} from './data/reducer';
import {createAPI} from "../shared/api";
import { setAuth } from "./user/reducer";

const rootReducer = {
  offers,
  data,
};

const onAuth = () => store.dispatch(setAuth(`NO_AUTH`));

const combinedReducers = combineReducers(rootReducer);

const api = createAPI(onAuth);

export const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);
