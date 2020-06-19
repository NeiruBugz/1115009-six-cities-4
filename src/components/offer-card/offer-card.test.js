import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card.jsx';

import offers from '../../mocks/offers';

describe(`OfferCard renders correctly`, () => {
  it(`should match with snapshot`, () => {
    const [first] = offers;
    const offerCard = renderer.create(
        <OfferCard offer={first} />
    ).toJSON();

    expect(offerCard).toMatchSnapshot();
  });
});
