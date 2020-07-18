import * as React from 'react';
import * as renderer from 'react-test-renderer';

import DetailedOffer from './detailed-offer.jsx';

import {offers} from '../../mocks/offers';

describe(`DetailedOffer renders correctly`, () => {
  it(`should render DetailedOffer component with passed props`, () => {
    const detailedOffer = renderer.create(
        <DetailedOffer offer={offers[1]} offers={offers} />
    ).toJSON();

    expect(detailedOffer).toMatchSnapshot();
  });
});
