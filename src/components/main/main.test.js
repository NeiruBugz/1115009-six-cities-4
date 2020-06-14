import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const rentOffers = 500;

const cardNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prisengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

describe(`Main renders correctly`, () => {
  it(`should render Main component with props`, function () {
    const main = renderer.create(
        <Main rentOffers={rentOffers} cardNames={cardNames} />
    ).toJSON();

    expect(main).toMatchSnapshot();
  });
});
