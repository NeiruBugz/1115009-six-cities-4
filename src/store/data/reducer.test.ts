import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../shared/api";
import {reducer, fetchOffersThunk, ActionTypes} from "./reducer";
import {offers} from '../../mocks/offers';

const api = createAPI(jest.fn());
const mockData = offers;

describe(`Thunk reducer tests`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {type: ``, payload: null})).toEqual({
      isLoading: false,
    });
  });

  it(`should return state with fetched offers`, () => {
    expect(reducer({
      isLoading: false,
    }, {
      type: ActionTypes.SET_IS_FETCHING,
      payload: true,
    })).toEqual({
      isLoading: true,
    });
  });

  // it(`should make an API call`, () => {
  //   const apiMock = new MockAdapter(api(jest.fn()));
  //
  //   apiMock.onGet(`/hotels`).reply(200, mockData);
  //
  //   const dispatch = jest.fn();
  //   const loader = fetchOffersThunk();
  //
  //   return loader(dispatch, jest.fn(), api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(4);
  //     });
  // });
});
