import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

import {offerList} from '../../prop-types/offer.types';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {},
    };
    this.handleOnCardMouseEnter = this._handleOnCardMouseEnter.bind(this);
    this.handleOnCardMouseLeave = this._handleOnCardMouseLeave.bind(this);
  }

  _handleOnCardMouseEnter(card) {
    this.setState({activeCard: card});
  }

  _handleOnCardMouseLeave() {
    this.setState({activeCard: {}});
  }

  render() {
    const {offers, onTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, idx) => {
          return (
            <OfferCard
              offer={offer}
              handleMouseOver={this.handleOnCardMouseEnter}
              handleMouseLeave={this.handleOnCardMouseLeave}
              onTitleClick={onTitleClick}
              index={idx}
              key={offer.id}
            />
          );
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: offerList.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default OffersList;
