import {reducer, ActionTypes} from './reducer';
import {offers as testOffers} from '../mocks/offers';

const mockedState = {
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
  offers: testOffers.filter((offer) => offer.city === `Amsterdam`),
  sort: `Popular`,
  activeCard: [0, 0],
};

describe(`reducer unit tests`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [0, 0],
    });
  });

  it(`should return state with selected city`, () => {
    expect(reducer(mockedState, {
      type: ActionTypes.SET_CITY,
      payload: {coordinates: [48.864716, 2.349014], name: `Paris`}
    })).toEqual({
      city: {coordinates: [48.864716, 2.349014], name: `Paris`},
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [0, 0],
    });
  });

  it(`should return state with city's offers`, () => {
    const selectedCity = `Amsterdam`;
    expect(reducer(mockedState, {
      type: ActionTypes.SET_OFFERS,
      payload: testOffers.filter((offer) => offer.city === selectedCity),
    })).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [0, 0],
    });
  });
});
