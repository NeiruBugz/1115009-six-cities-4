import React from 'react';
import PropTypes from 'prop-types';

import {offerShape} from '../../prop-types/offer.types';

const OfferCard = ({offer, handleMouseOver, handleMouseLeave, onTitleClick, index, isNearPlace}) => {
  const {mark, type, title, price, priceText, image, rating} = offer;

  const handleTitleClick = (idx, evt) => {
    evt.preventDefault();
    onTitleClick(idx);
  };

  return (
    <article
      className={isNearPlace ? `near-places__card place-card` : `cities__place-card place-card`}
      onMouseEnter={() => handleMouseOver(offer)}
      onMouseLeave={handleMouseLeave}
    >
      {mark &&
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={(evt) => handleTitleClick(index, evt)}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  isNearPlace: false,
};

OfferCard.propTypes = {
  offer: offerShape.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  isNearPlace: PropTypes.bool,
};

export default OfferCard;
