import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';

const rentOffers = 500;

const cardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prisengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component e2e`, function () {
  it(`should run onClick callback on card name`, () => {
    const onCardClick = jest.fn();

    const main = shallow(
        <Main rentOffers={rentOffers} cardNames={cardNames} onCardClick={onCardClick} />
    );

    const cardActiveElements = main.find(`h2.place-card__name`);

    cardActiveElements.forEach((card) => {
      card.simulate(`click`);
    });

    expect(onCardClick).toHaveBeenCalledTimes(5);
  });
});
