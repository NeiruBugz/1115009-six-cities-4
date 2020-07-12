import {offers as mockOffers} from '../mocks/offers';

const initialState = {
  city:
    {coordinates: [52.38333, 4.9], name: `Amsterdam`},
  cities: [
    {coordinates: [48.864716, 2.349014], name: `Paris`},
    {coordinates: [50.935173, 6.953101], name: `Cologne`},
    {coordinates: [50.8505, 4.3488], name: `Brussels`},
    {coordinates: [52.38333, 4.9], name: `Amsterdam`},
    {coordinates: [53.551086, 9.993682], name: `Hamburg`},
    {coordinates: [51.2217, 6.7762], name: `Dusseldorf`},
  ],
  offers: mockOffers.filter((offer) => offer.city === `Amsterdam`),
  sort: `Popular`,
  activeCard: {},
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
      return Object.assign({}, state, {sort: payload});
    case ActionTypes.SET_OFFERS:
      return Object.assign({}, state, {offers: payload});
    case ActionTypes.SET_ACTIVE_CARD:
      return Object.assign({}, state, {activeCard: payload});
    default:
      return state;
  }
};
