import React from 'react';
import renderer from 'react-test-renderer';

import OfferCard from './offer-card.jsx';

import {offers} from '../../mocks/offers';

describe(`OfferCard renders correctly`, () => {
  it(`should render OfferCard with passed props`, () => {
    const [first] = offers;
    const offerCard = renderer.create(
        <OfferCard
          offer={first}
          handleMouseOver={jest.fn()}
          handleMouseLeave={jest.fn()}
        />
    ).toJSON();

    expect(offerCard).toMatchSnapshot();
  });
});
