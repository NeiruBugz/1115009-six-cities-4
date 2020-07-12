import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.jsx';

import {offerList} from '../../prop-types/offer.types';
import {setActiveCard} from '../../store/reducer';

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
    this.props.onSetActiveCard(card);
  }

  _handleOnCardMouseLeave() {
    this.setState({activeCard: {}});
    this.props.onSetActiveCard({});
  }

  render() {
    const {offers, onTitleClick, isNearPlaces} = this.props;
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
              isNearPlace={isNearPlaces}
            />
          );
        })}
      </div>
    );
  }
}

OffersList.defaultProps = {
  isNearPlaces: false,
};

OffersList.propTypes = {
  offers: offerList.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  isNearPlaces: PropTypes.bool,
  onSetActiveCard: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSetActiveCard: (card) => dispatch(setActiveCard(card)),
});

export {OffersList};

export default connect(null, mapDispatchToProps)(OffersList);
