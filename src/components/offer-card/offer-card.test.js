import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card.jsx';

import {offers} from '../../mocks/offers';

describe(`OfferCard renders correctly`, () => {
  it(`should match with snapshot`, () => {
    const handleCardClick = jest.fn();
    const [first] = offers;
    const offerCard = renderer.create(
        <OfferCard offer={first} handleCardClick={handleCardClick} />
    ).toJSON();

    expect(offerCard).toMatchSnapshot();
  });
});
