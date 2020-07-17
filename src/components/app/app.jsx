import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';

import {offerList} from '../../prop-types/offer.types';

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
    const {offers} = this.props;
    const {activeOffer} = this.state;

    if (activeOffer === -1) {
      return (
        <Main onTitleClick={(idx) => this.handleTitleClick(idx)} />
      );
    }

    if (offers[activeOffer]) {
      return <DetailedOffer offer={offers[activeOffer]} />;
    }

    return null;
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <DetailedOffer offer={offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers,
});

App.propTypes = {
  offers: offerList.isRequired,
};

export {App};

export default connect(mapStateToProps, null)(App);
