import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesList} from './cities-list.jsx';
import {citiesWithCoordinates} from '../../mocks/cities';

it(`should render CitiesList correctly`, function () {
  const citiesList = renderer.create(
      <CitiesList
        onCityChange={() => {}}
        onOffersChange={() => {}}
        cities={citiesWithCoordinates}
        selectedCity={citiesWithCoordinates[0].name}
      />
  ).toJSON();

  expect(citiesList).toMatchSnapshot();
});
