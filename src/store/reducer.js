import {offers as mockOffers} from '../mocks/offers';
import {sortOffers} from '../shared/utils/functions';

const initialState = {
  city:
    {location: [52.38333, 4.9], name: `Amsterdam`},
  cities: [
    {location: [48.864716, 2.349014], name: `Paris`},
    {location: [50.935173, 6.953101], name: `Cologne`},
    {location: [50.8505, 4.3488], name: `Brussels`},
    {location: [52.38333, 4.9], name: `Amsterdam`},
    {location: [53.551086, 9.993682], name: `Hamburg`},
    {location: [51.2217, 6.7762], name: `Dusseldorf`},
  ],
  offers: mockOffers.filter((offer) => offer.city === `Amsterdam`),
  sort: `Popular`,
  activeCard: [0, 0],
};

export const ActionTypes = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
};

export const setCity = (city) => ({
  type: ActionTypes.SET_CITY,
  payload: city
});

export const setOffers = (offers) => ({
  type: ActionTypes.SET_OFFERS,
  payload: offers,
});

export const setSortType = (sortType) => ({
  type: ActionTypes.SET_SORT_TYPE,
  payload: sortType,
});

export const setActiveCard = (card) => ({
  type: ActionTypes.SET_ACTIVE_CARD,
  payload: card,
});

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CITY:
      return Object.assign({}, state, {city: payload});
    case ActionTypes.SET_SORT_TYPE:
      return Object.assign({}, state, {sort: payload, offers: sortOffers(state.offers, payload)});
    case ActionTypes.SET_OFFERS:
      return Object.assign({}, state, {offers: payload});
    case ActionTypes.SET_ACTIVE_CARD:
      return Object.assign({}, state, {activeCard: payload});
    default:
      return state;
  }
};
