import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

import {offers} from '../../mocks/offers';

describe(`Main renders correctly`, () => {
  it(`should render Main component with passed props`, () => {
    const main = renderer.create(
        <Main rentOffers={offers} onTitleClick={jest.fn()} />
    ).toJSON();

    expect(main).toMatchSnapshot();
  });
});
