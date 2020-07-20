import { reducer, setOffers, setSortType, setCity, setActiveCard } from './reducer';
import { offers as mockOffers, offers as testOffers } from '../../mocks/offers';
import { SORT_TYPES } from '../../shared/utils/consts';

const mockedState = {
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

describe(`reducer unit tests`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, { type: null, payload: null })).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: {
        latitude: 0,
        longitude: 0,
      },
    });
  });

  it(`should return state with selected city`, () => {
    expect(reducer(
      mockedState,
      setCity({ location: { latitude: 48.864716, longitude: 2.349014 }, name: `Paris` })
    )).toEqual({
      city: { location: { latitude: 48.864716, longitude: 2.349014 }, name: `Paris` },
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: {
        latitude: 0,
        longitude: 0,
      },
    });
  });

  it(`should return state with city's offers`, () => {
    const selectedCity = `Amsterdam`;
    expect(reducer(
      mockedState,
      setOffers(testOffers.filter((offer) => offer.city.name === selectedCity))
    )).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: {
        latitude: 0,
        longitude: 0,
      },
    });
  });

  it(`should return state with selected sort`, () => {
    const selectedSort = SORT_TYPES.TOP_RATED_FIRST;
    expect(reducer(
      mockedState,
      setSortType(selectedSort)
    )).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers.sort((a, b) => b.rating - a.rating),
      sort: `Top rated first`,
      activeCard: {
        latitude: 0,
        longitude: 0,
      },
    });
  });

  it(`should return state with selected active card`, () => {
    const activeCard = {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    };
    expect(reducer(
      mockedState,
      setActiveCard(activeCard)
    )).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198
      },
    });
  });
});
