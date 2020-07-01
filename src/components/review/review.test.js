import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review.jsx';

import {reviews} from '../../mocks/reviews';

describe(`Review renders correctly`, () => {
  it(`should render Review with passed data`, () => {
    const [{date, rating, text, userAvatar, userName}] = reviews;

    const review = renderer.create(
        <Review date={date} rating={rating} text={text} userAvatar={userAvatar} userName={userName} />
    ).toJSON();

    expect(review).toMatchSnapshot();
  });
});
