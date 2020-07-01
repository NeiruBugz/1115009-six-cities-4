import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsList from './reviews-list.jsx';

import {reviews} from '../../mocks/reviews';

describe(`ReviewList renders correctly`, () => {
  it(`should render ReviewList with passed props`, () => {
    const reviewList = renderer.create(
        <ReviewsList reviews={reviews} />
    ).toJSON();

    expect(reviewList).toMatchSnapshot();
  });
});
