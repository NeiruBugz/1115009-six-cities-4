import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setCity} from 'store/reducer';

const CitiesList = ({selectedCity, cities, onCityChange}) => {

  const handleCityClick = (city) => {
    onCityChange(city);
  };

  const listMarkup = cities.map((city, index) => {
    return (
      <li className="locations__item" key={`city--${index}`}>
        <a className={`locations__item-link tabs__item ${selectedCity === city ? `tabs__item--active` : ``}`}
          onClick={() => handleCityClick(city)}
        >
          <span>{city}</span>
        </a>
      </li>
    );
  });

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {listMarkup}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(setCity(city)),
});

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
