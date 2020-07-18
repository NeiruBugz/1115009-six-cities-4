import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Review from './review';

import { reviews } from '../../mocks/reviews';

describe(`Review renders correctly`, () => {
  it(`should render Review with passed data`, () => {
    const { date, rating, comment, user } = reviews[0];

    const review = renderer.create(
      <Review date={date} rating={rating} comment={comment} userAvatar={user.avatar_url} userName={user.name} />
    ).toJSON();

    expect(review).toMatchSnapshot();
  });
});
