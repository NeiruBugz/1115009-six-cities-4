import {SORT_TYPES} from './consts';

export const sortOffers = (offers, sortType) => {
  let newOffers = [];
  switch (sortType) {
    case SORT_TYPES.TOP_RATED_FIRST:
      newOffers = offers.sort((a, b) => b.rating - a.rating);
      break;
    case SORT_TYPES.PRICE_LOW_TO_HIGH:
      newOffers = offers.sort((a, b) => a.price - b.price);
      break;
    case SORT_TYPES.PRICE_HIGH_TO_LOW:
      newOffers = offers.sort((a, b) => b.price - a.price);
      break;
    default:
      newOffers = offers;
      break;
  }

  return newOffers;
};
