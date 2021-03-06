import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from '../main/main';
import DetailedOffer from '../detailed-offer/detailed-offer';

import {Offer} from "../../types/offer.types";
import EmptyMain from "../empty-main/empty-main";
import {Loader} from "../loader/loader";

type AppProps = {
  offers: Offer[];
  isLoading: boolean;
};

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
    const {activeOffer} = this.state;
    const {offers} = this.props;

    if (activeOffer === -1) {
      return (
        <Main onTitleClick={(idx) => this.handleTitleClick(idx)} />
      );
    }

    if (offers[activeOffer]) {
      return <DetailedOffer offer={offers[activeOffer]} offers={offers} />;
    }

    return null;
  }

  render() {
    const {offers, isLoading} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!isLoading ? this._renderApp() : <Loader />}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer offer={offers[0]} offers={offers} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  offers: state.offers.offers,
  isLoading: state.data.isLoading,
});

export {App};

export default connect(mapStateToProps, null)(App);
