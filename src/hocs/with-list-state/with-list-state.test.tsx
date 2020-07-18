import React from 'react';
import {create} from 'react-test-renderer';
import withListState from './with-list-state';

const MockedComponent = ({className}: {className: string}) => (
  <div className={className}>test</div>
);

const MockedHOC = withListState(MockedComponent);

describe(`withListState HOC unit tests`, () => {
  it(`should render wrapped component correctly`, () => {
    const hoc = create(
        <MockedHOC className={`test`}/>
    ).toJSON();

    expect(hoc).toMatchSnapshot();
  });
});
