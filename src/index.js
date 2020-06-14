import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const baseSettings = {
  rentOffers: 500,
  cardNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prisengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`,
  ],
  onCardClick: () => {},
};

ReactDOM.render(
    <App settings={baseSettings} />,
    document.querySelector(`#root`)
);
