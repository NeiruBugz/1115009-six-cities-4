import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../shared/api";
import {reducer, setLoading, fetchOffersThunk} from "./reducer";

const api = createAPI();

describe(`Thunk reducer tests`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {type: ``, payload: null})).toEqual({
      isLoading: false,
    });
  });
});
