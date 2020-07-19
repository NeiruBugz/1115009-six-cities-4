import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import withListState from './with-list-state';

Enzyme.configure({adapter: new Adapter()});

const MockedComponent = ({onSelectOpen}) => (
  <div>
    <button type="button" onClick={onSelectOpen}/>
  </div>
);

MockedComponent.propTypes = {
  onSelectOpen: PropTypes.func.isRequired,
};

const MockedHOC = withListState(MockedComponent);

describe(`withListState e2e tests`, () => {
  it(`should change MockedHOC state when clicked`, () => {
    const hoc = Enzyme.mount(
        <MockedHOC/>
    );

    console.log(hoc);

    expect(hoc.state().isListOpen).toBeFalsy();

    const openingButton = hoc.find(`button`);

    openingButton.simulate(`click`);
    expect(hoc.state().isListOpen).toBeTruthy();
    openingButton.simulate(`click`);
    expect(hoc.state().isListOpen).toBeFalsy();
  });
});
