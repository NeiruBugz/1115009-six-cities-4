const initialState = {
  authorizationStatus: `NO_AUTH`,
  user: ``,
};

export const ActionTypes = {
  SET_AUTH: `SET_AUTH`,
  SET_USER: `SET_USER`,
};

export const setAuth = (payload: string) => ({
  type: ActionTypes.SET_AUTH,
  payload,
});

export const setUser = (payload: string) => ({
  type: ActionTypes.SET_USER,
  payload,
})

export const setAuthThunk = () => (dispatch, getState, api) => {
  console.log(api);
  return api.get(`/login`)
    .then((response) => {
      dispatch(setAuth(response));
      return response;
    })
    .then((response) => dispatch(setUser(response.data.email)))
};

export const setUserThunk = (auth) => (dispatch, getState, api) => {
  return api.post(`/login`, {
    email: auth.email,
    password: auth.password
  })
    .then((response) => {
      dispatch(setAuth(response));
      dispatch(setUser(response.data.email));
    })
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_AUTH:
      return Object.assign({}, state, { authorizationStatus: payload });
    case ActionTypes.SET_USER:
      return Object.assign({}, state, { user: payload });
    default:
      return state;
  }
};
