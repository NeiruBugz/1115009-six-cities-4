import { City } from "./cities.types";
import { Offer } from "./offer.types";

export type OfferState = {
  city: City;
  cities: City[];
  offers: Offer[];
  serverOffers?: Offer[];
  sort: string;
  activeCard: {
    latitude: number,
    longitude: number,
  };
};
