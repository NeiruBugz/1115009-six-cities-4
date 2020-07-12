import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setSortType, setOffers} from '../../store/reducer';

import {SORT_TYPES} from '../../shared/utils/consts';

import {offers as defOffers} from '../../mocks/offers';

class Sort extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false,
    };

    this._handleOpenListClick = this._handleOpenListClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  _handleOpenListClick() {
    this.setState((prevState) => ({isListOpen: !prevState.isListOpen}));
  }

  _handleSortTypeChange(sortType) {
    let newOffers = defOffers;
    switch (sortType) {
      case SORT_TYPES.TOP_RATED_FIRST:
        newOffers = defOffers.sort((a, b) => a.rating - b.rating);
        break;
      case SORT_TYPES.PRICE_LOW_TO_HIGH:
        newOffers = defOffers.sort((a, b) => a.price - b.price);
        break;
      case SORT_TYPES.PRICE_HIGH_TO_LOW:
        newOffers = defOffers.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    this.props.onChangeSortType(sortType);
    this.props.onChangeOffersSort(newOffers);
    this._handleOpenListClick();
  }

  render() {
    const {isListOpen} = this.state;
    const {sortType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleOpenListClick}>
          &nbsp;{sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        {isListOpen &&
          <ul className={`places__options places__options--custom ${isListOpen ? `places__options--opened` : ``}`}>
            {Object.entries(SORT_TYPES).map(([key, value]) => {
              const selectedClassName = value === sortType ? `places__option--active` : ``;

              return (
                <li
                  key={key}
                  className={`places__option ${selectedClassName}`}
                  tabIndex="0"
                  onClick={() => this._handleSortTypeChange(value)}>
                  {value}
                </li>
              );
            })}
          </ul>
        }
      </form>
    );
  }
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
  onChangeOffersSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortType: (sortType) => dispatch(setSortType(sortType)),
  onChangeOffersSort: (offers) => dispatch(setOffers(offers)),
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
