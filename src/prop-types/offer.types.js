import PropTypes from 'prop-types';

export const offerShape = PropTypes.shape({
  mark: PropTypes.string,
  image: PropTypes.string,
  offerImages: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  priceText: PropTypes.string,
  rating: PropTypes.number,
  ratingValue: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  bedroomsCount: PropTypes.number,
  adultsCount: PropTypes.number,
  features: PropTypes.arrayOf(PropTypes.string),
  hostName: PropTypes.string,
  hostAvatar: PropTypes.string,
  super: PropTypes.bool,
  offerDescription: PropTypes.arrayOf(PropTypes.string),
  coordinates: PropTypes.arrayOf(PropTypes.number),
});

export const offerList = PropTypes.arrayOf(offerShape);
