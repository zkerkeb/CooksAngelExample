import React from 'react';
import ExerciceOne from '../';

import { shallow } from 'enzyme';


it('should match the snapshot (good Practice)', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} />
  );
  // console.log(component)
  // console.log(component.debug())
  // console.log(component.props())
  // console.log(component.state())
  expect(component).toMatchSnapshot();
});

it('should have two buttons', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} />
  );
  const buttonElement = component.find('button');

  expect(buttonElement.length).toEqual(2);
});

it('should have two buttons by classname', () => {
  const component = shallow(<ExerciceOne counterTitle="test" counterNumber={0} />);
  const buttonElement = component.find('[className="styledButton"]');

  // console.log(buttonElement.debug());

  expect(buttonElement.length).toEqual(2);
});



it('should return null', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} disabled={true} />
  );

  expect(component.type()).toBe(null);
});
