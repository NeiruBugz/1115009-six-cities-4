import * as React from 'react';

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import withListState from './with-list-state';

configure({ adapter: new Adapter() });

const MockedComponent = ({ onSelectOpen }: { onSelectOpen: () => void;}) => (
  <div>
    <button type="button" onClick={onSelectOpen} />
  </div>
);

const MockedHOC = withListState(MockedComponent);

describe(`withListState e2e tests`, () => {
  it(`should change MockedHOC state when clicked`, () => {
    const hoc = shallow(<MockedHOC />);

    expect(hoc.props().isListOpen).toEqual(false);
    hoc.props().onSelectOpen();
    expect(hoc.props().isListOpen).toEqual(true);
    hoc.props().onSelectOpen();
    expect(hoc.props().isListOpen).toEqual(false);
  });
});
