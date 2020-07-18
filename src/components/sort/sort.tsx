import React, { FC } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortType } from '../../store/reducer';

import { SORT_TYPES } from '../../shared/utils/consts';

interface SortProps {
  isListOpen: boolean;
  sortType: string;
  onChangeSortType: (sortType: string) => void;
  onSelectOpen: () => void;
}

const Sort: FC<SortProps> = ({ isListOpen, sortType, onChangeSortType, onSelectOpen }) => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSelectOpen}>
          &nbsp;{sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isListOpen &&
      <ul className={`places__options places__options--custom ${isListOpen ? `places__options--opened` : ``}`}>
        {Object.entries(SORT_TYPES).map(([key, value]: [string, string]) => {
          const selectedClassName = value === sortType ? `places__option--active` : ``;

          return (
            <li
              key={key}
              className={`places__option ${selectedClassName}`}
              tabIndex={0}
              onClick={() => {
                onChangeSortType(value);
                onSelectOpen();
              }}>
              {value}
            </li>
          );
        })}
      </ul>
      }
    </form>
  );
};

const mapStateToProps = (state) => ({
  sortType: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortType: (sortType) => dispatch(setSortType(sortType)),
});

export { Sort };
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
