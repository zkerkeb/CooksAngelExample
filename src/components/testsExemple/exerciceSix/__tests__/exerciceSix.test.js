import React from 'react';
import ExerciceSix from '../';

import { shallow } from 'enzyme';

var localStorageMock = (() => {
  var store = {};
  return {
    getItem: key => {
      return store[key];
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: key => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// console.log(localStorage)
beforeEach(() => {
  localStorage.clear();
});

it('should match the snapshot with props', () => {
  const component = shallow(<ExerciceSix data="test" />);

  expect(component).toMatchSnapshot();
});

it('should match the snapshot without props', () => {
  const component = shallow(<ExerciceSix />);

  expect(component).toMatchSnapshot();
});

it('should set the localStorage to the given string', () => {
  shallow(<ExerciceSix data="coco" />);

  expect(localStorage.getItem('data')).toBe('coco');
});

it('should set the localStorage to the given long string', () => {
  // console.log(localStorage.getItem('data'))
  // on se rend compte ici que la data est toujours dans le local storage si on utilise pas before Each
  shallow(<ExerciceSix data="cocococococococococococococo" />);

  expect(localStorage.getItem('data')).toBe('cocococococococococococococo');
});

it('should remove item called data set in the localStorage ', () => {
  shallow(<ExerciceSix data="test" />);
  localStorage.removeItem('data');

  expect(localStorage.getItem('data')).toBe(undefined);
});

it('should clear all data set in the localStorage ', () => {
  shallow(<ExerciceSix data="test" />);
  localStorage.clear();

  expect(localStorage.getItem('data')).toBe(undefined);
});
