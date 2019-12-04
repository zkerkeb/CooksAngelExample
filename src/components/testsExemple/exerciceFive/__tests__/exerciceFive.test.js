import React from 'react';
import ExerciceFive from '../';

import { shallow, mount } from 'enzyme';

it('should match the snapshot (good Practice)', () => {
  const component = shallow(
    <ExerciceFive counterTitle="test" counterNumber={0} />
  );

  expect(component).toMatchSnapshot();
});

it('sets loading state to true when loadButton is clicked once shallow', () => {
  const component = shallow(
    <ExerciceFive counterTitle="test" counterNumber={0} />
  );
  component.find('[className="loadButton"]').simulate('click');

  expect(component.state('isLoading')).toEqual(true);
});

it('sets loading state to true when loadButton is clicked once', () => {
  const component = shallow(
    <ExerciceFive counterTitle="test" counterNumber={0} />
  );
  component.find('[className="loadButton"]').simulate('click');

  expect(component.state('isLoading')).toEqual(true);
});

it('sets loading state to false when loadButton is clicked twice', () => {
  const component = shallow(
    <ExerciceFive counterTitle="test" counterNumber={0} />
  );
  component
    .find('[className="loadButton"]')
    .simulate('click')
    .simulate('click');

  expect(component.state('isLoading')).toEqual(false);
});

it('should have the counterNumber Props set to 0 without props', () => {
  const component = mount(<ExerciceFive counterTitle="test" />);
  expect(component.props().counterNumber).toEqual(0);
  component.unmount();
});
