import * as React from 'react';
import * as renderer from 'react-test-renderer';

import EmptyMain from "./empty-main";

it(`should render EmptyMain component with passed props`, () => {
  const emptyMain = renderer.create(
    <EmptyMain city={`Brussels`} />
  ).toJSON();

  expect(emptyMain).toMatchSnapshot();
});
