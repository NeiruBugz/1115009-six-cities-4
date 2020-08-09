import * as React from 'react';
import {connect} from 'react-redux';

import {setCity, setOffers} from '../../store/offers/reducer';

import {City} from "../../types/cities.types";
import {Offer} from "../../types/offer.types";

interface CitiesListProps {
  selectedCity: string;
  cities: City[];
  onCityChange: (city: City) => {};
  onOffersChange: (offers: Offer[]) => {};
  offers?: Offer[];
}

const CitiesList: React.FC<CitiesListProps> = (
    {selectedCity, cities, onCityChange, onOffersChange, offers}
) => {

  const handleCityClick = (city: string) => {
    const cityCoordinates = cities
      .filter(({name}) => name === city)[0].location;
    onCityChange({location: cityCoordinates, name: city});
    onOffersChange(offers.filter((offer: Offer) => offer.city.name === city));
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

const mapStateToProps = (state) => ({
  offers: state.offers.serverOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(setCity(city)),
  onOffersChange: (offers) => dispatch(setOffers(offers)),
});

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);


