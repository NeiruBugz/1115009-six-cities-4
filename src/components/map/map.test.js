import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map.jsx';

const mockMapProps = {
  city: [52.38333, 4.9],
  zoom: 12,
  coordinates: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198],
  ]
};

describe(`Map renders correctly`, () => {
  it(`should `, () => {
    const {city, zoom, coordinates} = mockMapProps;
    const map = renderer.create(
        <Map city={city} zoom={zoom} coordinates={coordinates} />
    ).toJSON();

    expect(map).toMatchSnapshot();
  });
});