import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store/store';

import App from './components/app/app';
import {fetchOffersThunk} from "./store/data/reducer";

store.dispatch(fetchOffersThunk());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
