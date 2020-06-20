import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({settings}) => {
  const {rentOffers, rentOffersCount} = settings;
  return <Main rentOffers={rentOffers} rentOffersCount={rentOffersCount} />;
};

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: PropTypes.arrayOf(
        PropTypes.shape({
          mark: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
          priceText: PropTypes.string,
          rating: PropTypes.number,
          title: PropTypes.string,
          type: PropTypes.string,
        })
    ),
    rentOffersCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
