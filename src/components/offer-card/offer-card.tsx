import React, { FC } from 'react';

import {Offer} from "../../types/offer.types";

interface OfferCardProps {
  offer: Offer;
  index: number;
  isNearPlace: boolean;
  onTitleClick: (index: number) => {};
  handleMouseOver: (offer: Offer) => void;
  handleMouseLeave: () => void;
}

const OfferCard:FC<OfferCardProps> = (props: OfferCardProps) => {
  const {offer, index, isNearPlace, onTitleClick, handleMouseOver, handleMouseLeave} = props;
  const {title, price, preview_image, is_premium, type, rating} = offer;


  const handleTitleClick = (idx: number, evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onTitleClick(idx);
  }

  return (
    <article
      className={isNearPlace ? `near-places__card place-card` : `cities__place-card place-card`}
      onMouseEnter={() => handleMouseOver(offer)}
      onMouseLeave={handleMouseLeave}
    >
      {is_premium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={preview_image}
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
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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
}

export default OfferCard;
