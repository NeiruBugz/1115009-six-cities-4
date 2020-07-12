import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from './main.jsx';

import {offers} from '../../mocks/offers';
import {citiesWithCoordinates} from '../../mocks/cities';

const mockStore = configureStore([]);

describe(`Main renders correctly`, () => {
  it(`should render Main component with passed props`, () => {
    const store = mockStore({offers, cities: citiesWithCoordinates, city: citiesWithCoordinates[0]});
    const main = renderer.create(
        <Provider store={store}>
          <Main
            rentOffers={offers}
            onTitleClick={jest.fn()}
            cities={citiesWithCoordinates}
            city={citiesWithCoordinates[0]}
          />
        </Provider>
    ).toJSON();

    expect(main).toMatchSnapshot();
  });
});
