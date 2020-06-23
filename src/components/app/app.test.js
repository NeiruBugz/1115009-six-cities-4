import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

import {offers} from '../../mocks/offers';

const mockSettings = {
  rentOffers: offers,
};

describe(`App renders correctly`, () => {
  it(`should render App component with passed props`, () => {
    const tree = renderer.create(
        <App settings={mockSettings} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
