import {offers as mockOffers} from '../mocks/offers';

const initialState = {
  city: `Amsterdam`,
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
