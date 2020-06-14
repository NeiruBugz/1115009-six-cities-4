import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const mockSettings = {
  rentOffers: 500,
  cardNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prisengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`,
  ],
  onCardClick: () => {},
};

describe(`App renders correctly`, () => {
  it(`should render App component with props`, () => {
    const tree = renderer.create(
        <App settings={mockSettings} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
