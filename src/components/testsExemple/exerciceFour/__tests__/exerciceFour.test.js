import React from 'react';
import ExerciceFour from '..';

import { shallow } from 'enzyme';

it('should match the snapshot (good Practice)', () => {
  const component = shallow(
    <ExerciceFour counterTitle="test" counterNumber={0} />
  );

  expect(component).toMatchSnapshot();
});

it('should have two buttons', () => {
  const component = shallow(
    <ExerciceFour counterTitle="test" counterNumber={0} />
  );  const buttonElement = component.find('button');

  expect(buttonElement.length).toEqual(2);
});

it('should return null', () => {
  const component = shallow(
    <ExerciceFour counterTitle="test" counterNumber={0} disabled={true} />
  );

  expect(component.type()).toBe(null);
});



it('should call decrement function when we click ', () => {
  const decrement = jest.fn();

  const component = shallow(
    <ExerciceFour counterTitle="test" counterNumber={0} decrement={decrement} />
  );
  component.find('button.decrementButton').simulate('click');

  expect(decrement).toHaveBeenCalled();
});

it('should call increment function when we click', () => {
  const increment = jest.fn();
  const component = shallow(
    <ExerciceFour counterTitle="test" counterNumber={0} increment={increment} />
  );
  component.find('button.incrementButton').simulate('click');

  expect(increment).toHaveBeenCalled();
});
