import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer';

import {offers} from '../../mocks/offers';
import { Offer } from "../../types/offer.types";

type AppProps = {
  settings: {
    rentOffers: Offer[],
  };
}

type AppState = {
  activeOffer: number;
}

class App extends React.PureComponent<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: -1,
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(idx: number) {
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

export default App;
