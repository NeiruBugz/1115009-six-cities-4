import PropTypes from 'prop-types';

export const reviewShape = PropTypes.shape({
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export const reviewList = PropTypes.arrayOf(reviewShape);
