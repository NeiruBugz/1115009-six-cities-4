import * as React from 'react';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import EmptyMain from '../empty-main/empty-main';
import Sort from '../sort/sort';

import withListState from '../../hocs/with-list-state/with-list-state';

import {Offer} from "../../types/offer.types";
import {City} from "../../types/cities.types";
import {LatLngTuple} from "leaflet";

const SortHOC = withListState(Sort);

type MainProps = {
  rentOffers: Offer[];
  onTitleClick: (idx: number) => void;
  cities: City[];
  city: City;
};

const Main: React.FC<MainProps> = ({rentOffers, onTitleClick, cities, city}) => {
  const offersCoordinates: LatLngTuple[] = rentOffers.map(({location}) => {
    return [location.latitude, location.longitude];
  });

  return <>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="icon-arrow-select" viewBox="0 0 7 4">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
        </symbol>
        <symbol id="icon-bookmark" viewBox="0 0 17 18">
          <path
            d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
        </symbol>
        <symbol id="icon-star" viewBox="0 0 13 12">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
        </symbol>
      </svg>
    </div>

    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${rentOffers.length === 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} selectedCity={city.name} />
        </div>
        {rentOffers.length === 0 ? <EmptyMain city={city.name} /> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{rentOffers.length} places to stay in {city.name}</b>
                <SortHOC />
                <OffersList offers={rentOffers} onTitleClick={onTitleClick} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={[city.location.latitude, city.location.longitude]}
                    zoom={12}
                    coordinates={offersCoordinates}
                  />
                </section>
              </div>
            </div>
          </div>
        }
      </main>
    </div>
  </>;
};

const mapStateToProps = (state) => ({
  cities: state.offers.cities,
  rentOffers: state.offers.offers,
  city: state.offers.city,
});

export {Main};
export default connect(mapStateToProps, null)(Main);
