import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({settings}) => {
  const {rentOffers} = settings;
  return <Main rentOffers={rentOffers} />;
};

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
