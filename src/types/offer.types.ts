import {City} from "./cities.types";
import {User} from "./user.types";

export type Offer = {
  bedrooms: number;
  description: string;
  goods: string[];
  id: number;
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  city: City;
  location: Location;
  host: User;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
