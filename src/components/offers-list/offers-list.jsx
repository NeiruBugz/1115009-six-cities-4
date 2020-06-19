import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick() {
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <OfferCard
              offer={offer}
              handleCardClick={this.handleCardClick}
              key={offer.id}
            />
          );
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        mark: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        priceText: PropTypes.string,
        rating: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
      })
  ).isRequired,
};

export default OffersList;
