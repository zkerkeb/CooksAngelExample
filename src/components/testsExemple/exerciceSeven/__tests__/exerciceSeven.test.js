import React from 'react';
import ExerciceSeven from '../';

import { shallow } from 'enzyme';

let spy;

afterEach(() => {
  spy.mockClear();
});

describe('test on method', () => {
  jest.mock('axios');

  it('component did mount must be called once', () => {
    spy = jest.spyOn(ExerciceSeven.prototype, 'componentDidMount');
    const component = shallow(<ExerciceSeven />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('componentDidMount must be called once (other method)', () => {
    const component = shallow(<ExerciceSeven />);
    // console.log(component.instance())
    spy = jest.spyOn(component.instance(), 'componentDidMount');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('getHouse must be called once ', () => {
    const component = shallow(<ExerciceSeven />);
    spy = jest.spyOn(component.instance(), 'getHouse');
    component.instance().getHouse();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
