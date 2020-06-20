import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {offers} from './mocks/offers';

const baseSettings = {
  rentOffers: offers,
  rentOffersCount: offers.length,
};

ReactDOM.render(
    <App settings={baseSettings} />,
    document.querySelector(`#root`)
);
