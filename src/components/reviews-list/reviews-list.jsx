import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';

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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    rating: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
};

export default ReviewsList;
