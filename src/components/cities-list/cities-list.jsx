import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setCity, setOffers} from 'store/reducer';
import {offerShape} from 'types/offer.types';

const CitiesList = ({selectedCity, cities, onCityChange, offers, onOffersChange}) => {

  const handleCityClick = (city) => {
    onCityChange(city);
    onOffersChange(offers.filter((offer) => offer.city === city));
  };

  const listMarkup = cities.map((city, index) => {
    return (
      <li className="locations__item" key={`city--${index}`}>
        <a className={`locations__item-link tabs__item ${selectedCity === city.name ? `tabs__item--active` : ``}`}
          onClick={() => handleCityClick(city.name)}
        >
          <span>{city.name}</span>
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
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number),
        name: PropTypes.string
      })).isRequired,
  onCityChange: PropTypes.func.isRequired,
  onOffersChange: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerShape)
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(setCity(city)),
  onOffersChange: (offers) => dispatch(setOffers(offers)),
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
