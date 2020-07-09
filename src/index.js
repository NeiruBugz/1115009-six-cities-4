import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from 'store/reducer';

import App from './components/app/app.jsx';

import {offers} from 'mocks/offers';
import {cities} from 'mocks/cities';

const store = createStore(reducer);

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
