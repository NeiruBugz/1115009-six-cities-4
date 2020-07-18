import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {CitiesList} from './cities-list';
import {citiesWithCoordinates} from '../../mocks/cities';

it(`should render CitiesList correctly`, function () {
  const citiesList = renderer.create(
      <CitiesList
        onCityChange={jest.fn()}
        onOffersChange={jest.fn()}
        cities={citiesWithCoordinates}
        selectedCity={citiesWithCoordinates[0].name}
      />
  ).toJSON();

  expect(citiesList).toMatchSnapshot();
});
