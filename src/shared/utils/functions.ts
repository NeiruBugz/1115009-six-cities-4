import {SORT_TYPES} from './consts';
import {Offer} from "../../types/offer.types";

export const sortOffers = (offers: Offer[], sortType: string) => {
  const newOffers = [...offers];
  switch (sortType) {
    case SORT_TYPES.TOP_RATED_FIRST:
      newOffers.sort((a, b) => b.rating - a.rating);
      break;
    case SORT_TYPES.PRICE_LOW_TO_HIGH:
      newOffers.sort((a, b) => a.price - b.price);
      break;
    case SORT_TYPES.PRICE_HIGH_TO_LOW:
      newOffers.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return newOffers;
};
