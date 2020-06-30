import React, {Fragment} from 'react';

import Review from '../review/review.jsx';
import {reviewList} from '../../prop-types/review.types';

const ReviewsList = ({reviews}) => {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.length > 0
          ? reviews.map(({id, userAvatar, userName, rating, text, date}) => {
            return (
              <Review
                key={id}
                userAvatar={userAvatar}
                userName={userName}
                rating={rating}
                text={text}
                date={date}
              />
            );
          })
          : null}
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: reviewList.isRequired,
};

export default ReviewsList;
