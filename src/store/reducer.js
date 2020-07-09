import {offers as mockOffers} from '../mocks/offers';

const initialState = {
  city: `Amsterdam`,
  cities: [
    {coordinates: [], name: `Paris`},
    {coordinates: [], name: `Cologne`},
    {coordinates: [], name: `Brussels`},
    {coordinates: [52.38333, 4.9], name: `Amsterdam`},
    {coordinates: [], name: `Hamburg`},
    {coordinates: [], name: `Dusseldorf`},
  ],
  offers: mockOffers.filter((offer) => offer.city === `Amsterdam`),
};

const ActionTypes = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
};

export const setCity = (city) => ({
  type: ActionTypes.SET_CITY,
  payload: city
});

export const setOffers = (offers) => ({
  type: ActionTypes.SET_OFFERS,
  payload: offers,
});

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CITY:
      return Object.assign({}, state, {city: payload});
    case ActionTypes.SET_OFFERS:
      return Object.assign({}, state, {offers: payload});
    default:
      return state;
  }
};
