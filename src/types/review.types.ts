import {User} from "./user.types";

export type ReviewType = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: User;
};
