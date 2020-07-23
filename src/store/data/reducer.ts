import { setOffers, setServerOffers } from "../offers/reducer";
import { Offer } from "../../types/offer.types";

const initialState = {
  isLoading: false,
};

const ActionTypes = {
  SET_IS_FETCHING: `SET_IS_FETCHING`,
  SET_SERVER_OFFERS: `SET_SERVER_OFFERS`,
};

export const setLoading = (payload: boolean) => ({
  type: ActionTypes.SET_IS_FETCHING,
  payload,
});

export const fetchOffersThunk = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
    .then(({ data }: { data: Offer[] }) => {
      dispatch(setLoading(true));
      dispatch(setOffers(data.filter((offer) => offer.city.name === getState().offers.city.name)));
      dispatch(setServerOffers(data));
    })
    .then(() => dispatch(setLoading(false)));
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_IS_FETCHING:
      return Object.assign({}, state, { isLoading: payload });
    case ActionTypes.SET_SERVER_OFFERS:
      return Object.assign({}, state, { offers: payload });
    default:
      return state;
  }
}

