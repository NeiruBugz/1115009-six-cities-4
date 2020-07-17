import React from 'react';
import {string} from 'prop-types';
import {create} from 'react-test-renderer';
import withListState from './with-list-state';

const MockedComponent = ({className}) => (
  <div className={className}>test</div>
);

MockedComponent.propTypes = {
  className: string.isRequired,
};

const MockedHOC = withListState(MockedComponent);

describe(`withListState HOC unit tests`, () => {
  it(`should render wrapped component correctly`, () => {
    const hoc = create(
        <MockedHOC className={`test`}/>
    ).toJSON();

    expect(hoc).toMatchSnapshot();
  });
});
