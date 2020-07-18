import React, { FC } from 'react';
import { connect } from 'react-redux';

import OfferCard from '../offer-card/offer-card';

import { setActiveCard } from '../../store/reducer';

import { Offer } from "../../types/offer.types";

interface OffersListProps {
  offers: Offer[];
  onTitleClick?: (idx: number) => void;
  isNearPlaces?: boolean;
  onSetActiveCard: (offerCoordinates: number[]) => void;
}

const OffersList: FC<OffersListProps> = ({ offers, onTitleClick, isNearPlaces, onSetActiveCard }) => {

  const handleOnCardMouseEnter = ({ location }) => {
    const { longitude, latitude } = location;
    onSetActiveCard([latitude, longitude]);
  }

  const handleOnCardMouseLeave = () => {
    onSetActiveCard([]);
  }

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

const mapDispatchToProps = (dispatch) => ({
  onSetActiveCard: (card) => dispatch(setActiveCard(card)),
});

export { OffersList };

export default connect(null, mapDispatchToProps)(OffersList);
