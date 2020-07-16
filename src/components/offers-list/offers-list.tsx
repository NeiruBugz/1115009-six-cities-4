import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card';

import {offerList} from '../../prop-types/offer.types';
import {setActiveCard} from '../../store/reducer';
import { Offer } from "../../types/offer.types";

interface OffersListProps {
  offers: Offer[];
  onTitleClick?: () => {};
  isNearPlaces: boolean;
  onSetActiveCard: (offerCoordinates: number[]) => void;
}

type OffersListState = {
  activeCard: number[];
};

class OffersList extends PureComponent<OffersListProps, OffersListState> {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: [],
    };
    this._handleOnCardMouseEnter = this._handleOnCardMouseEnter.bind(this);
    this._handleOnCardMouseLeave = this._handleOnCardMouseLeave.bind(this);
  }

  _handleOnCardMouseEnter(card) {
    this.setState({activeCard: card});
    this.props.onSetActiveCard(card.coordinates);
  }

  _handleOnCardMouseLeave() {
    this.setState({activeCard: []});
    this.props.onSetActiveCard([]);
  }

  render() {
    const {offers, onTitleClick, isNearPlaces} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, idx) => {
          return (
            <OfferCard
              offer={offer}
              handleMouseOver={this._handleOnCardMouseEnter}
              handleMouseLeave={this._handleOnCardMouseLeave}
              onTitleClick={onTitleClick}
              index={idx}
              key={offer.id}
              isNearPlace={isNearPlaces}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetActiveCard: (card) => dispatch(setActiveCard(card)),
});

export {OffersList};

export default connect(null, mapDispatchToProps)(OffersList);
