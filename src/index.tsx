import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from './store/reducer';

import App from './components/app/app';

import { offers } from './mocks/offers';
import { cities } from './mocks/cities';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

const baseSettings = {
  rentOffers: offers,
  rentOffersCount: offers.length,
  cities,
};

ReactDOM.render(
  <Provider store={store}>
    <App settings={baseSettings} />
  </Provider>,
  document.querySelector(`#root`)
);
