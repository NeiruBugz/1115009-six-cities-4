import React from 'react';
import renderer from 'react-test-renderer';

import DetailedOffer from './detailed-offer.jsx';

import {offers} from '../../mocks/offers';

describe(`DetailedOffer renders correctly`, () => {
  it(`should render DetailedOffer component with passed props`, () => {
    const detailedOffer = renderer.create(
        <DetailedOffer offer={offers[1]} />
    ).toJSON();

    expect(detailedOffer).toMatchSnapshot();
  });
});