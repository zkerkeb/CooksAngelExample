
import React from 'react';
import Square from '../';
import 'jest-styled-components';

import { shallow } from 'enzyme';


it('should match the snapshot (good Practice)', () => {
  const component = shallow(
    <Square  />
  ).dive();
  // console.log(component)
  // console.log(component.debug())
  // console.log(component.props())
  // console.log(component.state())
  expect(component).toMatchSnapshot();
});

