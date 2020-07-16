import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferCard from '../offer-card/offer-card.tsx';

import {offerList} from '../../prop-types/offer.types';
import {setActiveCard} from '../../store/reducer';

const OffersList = ({onSetActiveCard, offers, onTitleClick, isNearPlaces}) => {

  const handleOnCardMouseEnter = (card) => {
    onSetActiveCard(card.coordinates);
  };

  const handleOnCardMouseLeave = () => {
    onSetActiveCard([]);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, idx) => {
        return (
          <OfferCard
            offer={offer}
            handleMouseOver={handleOnCardMouseEnter}
            handleMouseLeave={handleOnCardMouseLeave}
            onTitleClick={onTitleClick}
            index={idx}
            key={offer.id}
            isNearPlace={isNearPlaces}
          />
        );
      })}
    </div>
  );
};

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
