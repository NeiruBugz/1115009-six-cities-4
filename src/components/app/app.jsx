import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({settings}) => {
  const {rentOffers, cardNames, onCardClick} = settings;
  return <Main rentOffers={rentOffers} cardNames={cardNames} onCardClick={onCardClick} />;
};

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: PropTypes.number.isRequired,
    cardNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCardClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
