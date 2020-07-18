import React, { FC, Fragment } from 'react';

import Review from '../review/review';
import { ReviewType } from "../../types/review.types";

type ReviewsListProps = {
  reviews: ReviewType[];
};

const ReviewsList: FC<ReviewsListProps> = ({reviews}) => {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.length > 0
          ? reviews.map(({id, user, rating, comment, date}) => {
            return (
              <Review
                key={id}
                userAvatar={user.avatar_url}
                userName={user.name}
                rating={rating}
                comment={comment}
                date={date}
              />
            );
          })
          : null}
      </ul>
    </Fragment>
  );
};

export default ReviewsList;
