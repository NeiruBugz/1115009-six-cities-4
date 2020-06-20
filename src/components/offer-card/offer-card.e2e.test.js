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
    const onMouseEnter = jest.fn((result) => result);

    const [first] = offers;

    const offerCard = shallow(
        <OfferCard
          offer={first}
          handleMouseLeave={jest.fn()}
          handleMouseOver={onMouseEnter}
        />
    );

    const cardActiveElement = offerCard.find(`.place-card`);

    cardActiveElement.simulate(`mouseenter`, {});

    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(first);
  });
});
