import React from 'react';
import {create} from 'react-test-renderer';

import {Sort} from './sort.jsx';

describe(`Sort component unit tests`, () => {
  it(`should render Sort correctly`, () => {
    const sort = create(
        <Sort
          isListOpen={false}
          onSelectOpen={jest.fn()}
          sortType={`Popular`}
          onChangeSortType={jest.fn()}
        />
    ).toJSON();

    expect(sort).toMatchSnapshot();
  });
});