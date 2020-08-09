import {setOffers, setServerOffers} from "../offers/reducer";
import {Offer} from "../../types/offer.types";

const initialState = {
  isLoading: false,
};

export const ActionTypes = {
  SET_IS_FETCHING: `SET_IS_FETCHING`,
};

export const setLoading = (payload: boolean) => ({
  type: ActionTypes.SET_IS_FETCHING,
  payload,
});

export const fetchOffersThunk = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
    .then(({data}: { data: Offer[] }) => {
      const {name: city} = data[0].city;
      dispatch(setLoading(true));
      dispatch(setOffers(data.filter((offer) => offer.city.name === city)));
      dispatch(setServerOffers(data));
    })
    .then(() => dispatch(setLoading(false)));
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_IS_FETCHING:
      return Object.assign({}, state, {isLoading: payload});
    default:
      return state;
  }
};

