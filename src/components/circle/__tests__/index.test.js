
import React from 'react';
import Circle from '../';
import 'jest-styled-components';

import { shallow } from 'enzyme';


it('should match the snapshot', () => {
  const component = shallow(
    <Circle  />
  );

  expect(component).toMatchSnapshot();
});

