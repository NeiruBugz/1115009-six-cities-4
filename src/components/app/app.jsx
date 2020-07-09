import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';

import {offers} from 'mocks/offers';
import {offerList} from 'types/offer.types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: -1,
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(idx) {
    this.setState({activeOffer: idx});
  }

  _renderApp() {
    const {rentOffers} = this.props.settings;
    const {activeOffer} = this.state;

    if (activeOffer === -1) {
      return (
        <Main onTitleClick={(idx) => this.handleTitleClick(idx)} />
      );
    }

    if (rentOffers[activeOffer]) {
      return <DetailedOffer offer={offers[activeOffer]} />;
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer offer={this.props.settings.rentOffers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    rentOffers: offerList.isRequired,
  }).isRequired,
};

export default App;
