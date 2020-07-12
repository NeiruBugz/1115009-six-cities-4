import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app.jsx';

import {offers} from '../../mocks/offers';
import {citiesWithCoordinates} from '../../mocks/cities';

const mockSettings = {
  rentOffers: offers,
};

const mockStore = configureStore([]);

describe(`App renders correctly`, () => {
  it(`should render App component with passed props`, () => {
    const store = mockStore({offers, cities: citiesWithCoordinates, city: citiesWithCoordinates[0], sort: `Popular`, activeCard: [0, 0]});
    const tree = renderer.create(
        <Provider store={store}>
          <App settings={mockSettings} />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
