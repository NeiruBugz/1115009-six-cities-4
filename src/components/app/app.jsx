import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({settings}) => {
  const {rentOffers, cardNames} = settings;
  return <Main rentOffers={rentOffers} cardNames={cardNames} />;
};

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: PropTypes.number.isRequired,
    cardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default App;
