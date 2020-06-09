import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const baseSettings = {
  rentOffers: 500,
};

ReactDOM.render(
    <App settings={baseSettings} />,
    document.querySelector(`#root`)
);
