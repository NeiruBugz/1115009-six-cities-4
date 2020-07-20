import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Sort } from './sort';

describe(`Sort component unit tests`, () => {
  it(`should render Sort correctly`, () => {
    const sort = renderer.create(
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
