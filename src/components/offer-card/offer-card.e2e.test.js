import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card.jsx';

import {offers} from '../../mocks/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCard e2e test`, () => {
  it(`should pass offer data to event handler`, () => {
    const handleCardClick = jest.fn();

    const [first] = offers;

    const offerCard = shallow(
        <OfferCard offer={first} handleCardClick={handleCardClick} />
    );
  });
});
