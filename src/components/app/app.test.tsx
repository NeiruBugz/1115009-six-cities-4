import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { App } from './app';

import { offers } from '../../mocks/offers';
import { citiesWithCoordinates } from '../../mocks/cities';

const mockStore = configureStore({});

describe(`App renders correctly`, () => {
  it(`should render App component with passed props`, () => {
    const store = mockStore({
      offers: {
        offers,
        cities: citiesWithCoordinates,
        city: citiesWithCoordinates[0],
        sort: `Popular`,
        activeCard: {
          latitude: 0,
          longitude: 0,
        },
      }
    });
    const tree = renderer.create(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
