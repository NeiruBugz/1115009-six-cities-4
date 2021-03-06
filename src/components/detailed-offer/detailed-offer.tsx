import * as React from 'react';

import ReviewsList from '../reviews-list/reviews-list';
import {Map} from '../map/map';
import {OffersList} from '../offers-list/offers-list';

import {reviews} from '../../mocks/reviews';
import {Offer} from "../../types/offer.types";
import {LatLngTuple} from "leaflet";

type DetailedOfferProps = {
  offer: Offer;
  offers: Offer[];
};

const DetailedOffer: React.FC<DetailedOfferProps> = ({offer, offers}) => {

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const filteredCoordinates: LatLngTuple[] = offers
    .filter(({location}) => JSON.stringify([location.latitude, location.longitude]) !== JSON.stringify([offer.location.latitude, offer.location.longitude]))
    .map(({location}) => [location.latitude, location.longitude]);


  const {
    title,
    type,
    is_premium,
    price,
    rating,
    bedrooms,
    max_adults,
    goods,
    host,
    description,
    images
  } = offer;

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
          </symbol>
        </svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, idx) =>
                  <div className="property__image-wrapper" key={`${image}--${idx}`}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {is_premium && (<div className="property__mark">
                  <span>Premium</span>
                </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {max_adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((feature, idx) =>
                      <li className="property__inside-item" key={`${feature}--${idx}`}>{feature}</li>
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper ${host.is_pro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatar_url} width="74"
                        height="74"
                        alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList reviews={reviews.splice(generateRandomInteger(0, 2), generateRandomInteger(0, 2))} />
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
                        type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
                        type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
                        type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
                        type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
                        type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
                        title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review"
                      placeholder="Tell how was your stay, what you like and what can be improved" />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and
                        describe
                        your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={offer.city}
                coordinates={filteredCoordinates}
                zoom={12}
                activeCard={[0, 0]}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={
                    offers
                      .filter((restOffer) => restOffer.location !== offer.location)
                      .slice(0, 3)
                  }
                  onSetActiveCard={() => {
                  }}
                  isNearPlaces
                />
                {/* <article className="near-places__card place-card">*/}
                {/*  <div className="near-places__image-wrapper place-card__image-wrapper">*/}
                {/*    <a href="#">*/}
                {/*      <img className="place-card__image" src="img/room.jpg" width="260" height="200"*/}
                {/*        alt="Place image" />*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*  <div className="place-card__info">*/}
                {/*    <div className="place-card__price-wrapper">*/}
                {/*      <div className="place-card__price">*/}
                {/*        <b className="place-card__price-value">&euro;80</b>*/}
                {/*        <span className="place-card__price-text">&#47;&nbsp;night</span>*/}
                {/*      </div>*/}
                {/*      <button className="place-card__bookmark-button place-card__bookmark-button--active button"*/}
                {/*        type="button">*/}
                {/*        <svg className="place-card__bookmark-icon" width="18" height="19">*/}
                {/*          <use xlinkHref="#icon-bookmark"></use>*/}
                {/*        </svg>*/}
                {/*        <span className="visually-hidden">In bookmarks</span>*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*    <div className="place-card__rating rating">*/}
                {/*      <div className="place-card__stars rating__stars">*/}
                {/*        <span style={{width: `80%`}}></span>*/}
                {/*        <span className="visually-hidden">Rating</span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <h2 className="place-card__name">*/}
                {/*      <a href="#">Wood and stone place</a>*/}
                {/*    </h2>*/}
                {/*    <p className="place-card__type">Private room</p>*/}
                {/*  </div>*/}
                {/* </article>*/}

                {/* <article className="near-places__card place-card">*/}
                {/*  <div className="near-places__image-wrapper place-card__image-wrapper">*/}
                {/*    <a href="#">*/}
                {/*      <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200"*/}
                {/*        alt="Place image" />*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*  <div className="place-card__info">*/}
                {/*    <div className="place-card__price-wrapper">*/}
                {/*      <div className="place-card__price">*/}
                {/*        <b className="place-card__price-value">&euro;132</b>*/}
                {/*        <span className="place-card__price-text">&#47;&nbsp;night</span>*/}
                {/*      </div>*/}
                {/*      <button className="place-card__bookmark-button button" type="button">*/}
                {/*        <svg className="place-card__bookmark-icon" width="18" height="19">*/}
                {/*          <use xlinkHref="#icon-bookmark"></use>*/}
                {/*        </svg>*/}
                {/*        <span className="visually-hidden">To bookmarks</span>*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*    <div className="place-card__rating rating">*/}
                {/*      <div className="place-card__stars rating__stars">*/}
                {/*        <span style={{width: `80%`}}></span>*/}
                {/*        <span className="visually-hidden">Rating</span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <h2 className="place-card__name">*/}
                {/*      <a href="#">Canal View Prinsengracht</a>*/}
                {/*    </h2>*/}
                {/*    <p className="place-card__type">Apartment</p>*/}
                {/*  </div>*/}
                {/* </article>*/}

                {/* <article className="near-places__card place-card">*/}
                {/*  <div className="near-places__image-wrapper place-card__image-wrapper">*/}
                {/*    <a href="#">*/}
                {/*      <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200"*/}
                {/*        alt="Place image" />*/}
                {/*    </a>*/}
                {/*  </div>*/}
                {/*  <div className="place-card__info">*/}
                {/*    <div className="place-card__price-wrapper">*/}
                {/*      <div className="place-card__price">*/}
                {/*        <b className="place-card__price-value">&euro;180</b>*/}
                {/*        <span className="place-card__price-text">&#47;&nbsp;night</span>*/}
                {/*      </div>*/}
                {/*      <button className="place-card__bookmark-button button" type="button">*/}
                {/*        <svg className="place-card__bookmark-icon" width="18" height="19">*/}
                {/*          <use xlinkHref="#icon-bookmark"></use>*/}
                {/*        </svg>*/}
                {/*        <span className="visually-hidden">To bookmarks</span>*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*    <div className="place-card__rating rating">*/}
                {/*      <div className="place-card__stars rating__stars">*/}
                {/*        <span style={{width: `100%`}}></span>*/}
                {/*        <span className="visually-hidden">Rating</span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <h2 className="place-card__name">*/}
                {/*      <a href="#">Nice, cozy, warm big bed apartment</a>*/}
                {/*    </h2>*/}
                {/*    <p className="place-card__type">Apartment</p>*/}
                {/*  </div>*/}
                {/* </article>*/}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailedOffer;
