import { ReviewType } from "../types/review.types";

export const reviews: ReviewType[] = [
  {
    id: 0,
    rating: 80,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `April 2019`,
    user: {
      avatar_url: `img/avatar-max.jpg`,
      is_pro: false,
      id: 0,
      name: `Max`
    }
  },
  {
    id: 1,
    rating: 20,
    comment: `Terrible!!!!!!!!`,
    date: `April 2019`,
    user: {
      avatar_url: `img/avatar-max.jpg`,
      is_pro: false,
      id: 0,
      name: `Jack`
    }
  },
  {
    id: 2,
    rating: 100,
    comment: `I've got some good times with this place. Lovely`,
    date: `March 2019`,
    user: {
      avatar_url: `img/avatar-max.jpg`,
      is_pro: false,
      id: 0,
      name: `Melany`
    }
  }
];
