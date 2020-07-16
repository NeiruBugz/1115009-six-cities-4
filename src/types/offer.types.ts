import { City } from "./cities.types";

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
  host: Host;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type Host = {
  avatar_url: string;
  id: number;
  is_pro: boolean;
  name: string;
};
