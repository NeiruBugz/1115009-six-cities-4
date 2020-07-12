import {reducer, setOffers, setSortType, setCity, setActiveCard} from './reducer';
import {offers as testOffers} from '../mocks/offers';
import {SORT_TYPES} from '../shared/utils/consts';

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
    expect(reducer(
        mockedState,
        setCity({coordinates: [48.864716, 2.349014], name: `Paris`})
    )).toEqual({
      city: {coordinates: [48.864716, 2.349014], name: `Paris`},
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [0, 0],
    });
  });

  it(`should return state with city's offers`, () => {
    const selectedCity = `Amsterdam`;
    expect(reducer(
        mockedState,
        setOffers(testOffers.filter((offer) => offer.city === selectedCity))
    )).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [0, 0],
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
      offers: mockedState.offers,
      sort: `Top rated first`,
      activeCard: [0, 0],
    });
  });

  it(`should return state with selected active card`, () => {
    const activeCard = [52.3809553943508, 4.939309666406198];
    expect(reducer(
        mockedState,
        setActiveCard(activeCard)
    )).toEqual({
      city: mockedState.city,
      cities: mockedState.cities,
      offers: mockedState.offers,
      sort: `Popular`,
      activeCard: [52.3809553943508, 4.939309666406198],
    });
  });
});
