import { offers as mockOffers } from '../mocks/offers';
import { sortOffers } from '../shared/utils/functions';
import { OfferState } from "../types/offer.state.types";

const initialState: OfferState = {
  city:
    { location: { latitude: 52.38333, longitude: 4.9 }, name: `Amsterdam` },
  cities: [
    { location: { latitude: 48.864716, longitude: 2.349014 }, name: `Paris` },
    { location: { latitude: 50.935173, longitude: 6.953101 }, name: `Cologne` },
    { location: { latitude: 50.8505, longitude: 4.3488 }, name: `Brussels` },
    { location: { latitude: 52.38333, longitude: 4.9 }, name: `Amsterdam` },
    { location: { latitude: 53.551086, longitude: 9.993682 }, name: `Hamburg` },
    { location: { latitude: 51.2217, longitude: 6.7762 }, name: `Dusseldorf` },
  ],
  offers: mockOffers.filter((offer) => offer.city.name === `Amsterdam`),
  sort: `Popular`,
  activeCard: {
    latitude: 0,
    longitude: 0,
  },
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

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CITY:
      return Object.assign({}, state, { city: payload });
    case ActionTypes.SET_SORT_TYPE:
      return Object.assign({}, state, { sort: payload, offers: sortOffers(state.offers, payload) });
    case ActionTypes.SET_OFFERS:
      return Object.assign({}, state, { offers: payload });
    case ActionTypes.SET_ACTIVE_CARD:
      return Object.assign({}, state, { activeCard: payload });
    default:
      return state;
  }
};
