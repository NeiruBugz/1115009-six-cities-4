import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review/jsx';

const ReviewsList = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviews.length ? reviews.map(({review}) => <Review key={review.id}/>) : null}
      </ul>
    </section>
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

