/* eslint-disable camelcase */
import {Offer} from "../types/offer.types";

export const offers: Offer[] = [
  {
    id: 0,
    is_premium: true,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    price: 120,
    rating: 80,
    type: `House`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 0,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: false,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    city: {
      name: `Amsterdam`,
      location: {
        longitude: 4.85309666406198,
        latitude: 52.3909553943508,
        zoom: 10
      },
    },
    is_favorite: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
  },
  {
    id: 1,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 120,
    rating: 80,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.369553943508, longitude: 4.85309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
  {
    id: 2,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 120,
    rating: 80,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
  {
    id: 3,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 120,
    rating: 80,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
  {
    id: 4,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 120,
    rating: 80,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.369553943508, longitude: 4.85309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
  {
    id: 5,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 100,
    rating: 70,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
  {
    id: 6,
    preview_image: `img/apartment-01.jpg`,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    price: 140,
    rating: 100,
    type: `Apartment`,
    title: `Wood and stone place`,
    bedrooms: 3,
    max_adults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cable TV`,
    ],
    host: {
      id: 1,
      name: `Angelina`,
      avatar_url: `img/avatar-angelina.jpg`,
      is_pro: true,
    },
    description:
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    location: {
      latitude: 52.369553943508, longitude: 4.85309666406198, zoom: 12
    },
    city: {name: `Amsterdam`, location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 10}},
    is_premium: false,
    is_favorite: false,
  },
];
