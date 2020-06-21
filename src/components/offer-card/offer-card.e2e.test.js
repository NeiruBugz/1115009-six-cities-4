import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card.jsx';

import {offers} from '../../mocks/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockedEvent = {
  preventDefault() {},
};

describe(`OfferCard e2e test`, () => {
  it(`should pass offer data to event handler`, () => {
    const onMouseEnter = jest.fn((result) => result);

    const [first] = offers;

    const offerCard = shallow(
        <OfferCard
          offer={first}
          handleMouseLeave={jest.fn()}
          handleMouseOver={onMouseEnter}
          index={1}
          onTitleClick={jest.fn()}
        />
    );

    const cardActiveElement = offerCard.find(`.place-card`);

    cardActiveElement.simulate(`mouseenter`, {});

    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(first);
  });

  it(`should render DetailedOffer component on title click`, () => {
    const mockTitleClick = jest.fn((index) => index);

    const offerIndex = 1;

    const [first] = offers;

    const offerCard = shallow(
        <OfferCard
          onTitleClick={mockTitleClick}
          offer={first}
          handleMouseOver={jest.fn()}
          index={offerIndex}
          handleMouseLeave={jest.fn()}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`, mockedEvent);

    expect(mockTitleClick.mock.calls.length).toBe(offerIndex);
  });
});
