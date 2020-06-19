import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {rentOffers, rentOffersCount} = this.props.settings;
    return (
      <Main rentOffers={rentOffers} rentOffersCount={rentOffersCount} />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: PropTypes.arrayOf(
        PropTypes.shape({
          mark: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
          priceText: PropTypes.string,
          rating: PropTypes.number,
          title: PropTypes.string,
          type: PropTypes.string,
        })
    ),
    rentOffersCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
