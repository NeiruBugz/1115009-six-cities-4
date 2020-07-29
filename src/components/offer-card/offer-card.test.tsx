import * as React from 'react';
import * as renderer from 'react-test-renderer';

import OfferCard from './offer-card';

import {offers} from '../../mocks/offers';

describe(`OfferCard renders correctly`, () => {
  it(`should render OfferCard with passed props`, () => {
    const [first] = offers;
    const offerCard = renderer.create(
        <OfferCard
          offer={first}
          handleMouseOver={jest.fn()}
          handleMouseLeave={jest.fn()}
          index={1}
          onTitleClick={jest.fn()}
          isNearPlace={false}/>
    ).toJSON();

    expect(offerCard).toMatchSnapshot();
  });
});
