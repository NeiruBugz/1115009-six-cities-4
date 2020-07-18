import React from 'react';
import renderer from 'react-test-renderer';

import { OffersList } from './offers-list';

import { offers } from '../../mocks/offers';

describe(`OffersList renders correctly`, () => {
  it(`should render OffersList with passed props`, () => {
    const offersList = renderer.create(
      <OffersList offers={offers} onTitleClick={jest.fn()} onSetActiveCard={jest.fn()} />
    ).toJSON();

    expect(offersList).toMatchSnapshot();
  });
});
