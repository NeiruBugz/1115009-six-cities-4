import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withListState from './with-list-state';

const MockedComponent = ({className}: {className: string}) => (
  <div className={className}>test</div>
);

const MockedHOC = withListState(MockedComponent);

describe(`withListState HOC unit tests`, () => {
  it(`should render wrapped component correctly`, () => {
    const hoc = renderer.create(
        <MockedHOC className={`test`}/>
    ).toJSON();

    expect(hoc).toMatchSnapshot();
  });
});
