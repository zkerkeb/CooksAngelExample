

import React from 'react';
import ExerciceTwo from '../';

import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const component = shallow(<ExerciceTwo numberElements={3} />);
  expect(component).toMatchSnapshot();
});


it('should title equal to Allo', () => {
  const component = shallow(<ExerciceTwo numberElements={3} />);
  const title = component.find('h1');
  expect(title.text()).toBe('Allo');
});



it('should li number equal to number of elements', () => {
  const component = shallow(<ExerciceTwo numberElements={3} />);
  const nbOfElem = component.instance().props.numberElements;
  expect(component.find('li').length).toEqual(nbOfElem);

});










// import React from 'react'
// import ExerciceTwo from '../'

// import { shallow } from 'enzyme'

// it('should render with no props', () => {
//   const component = shallow(<ExerciceTwo />)

//   expect(component).toMatchSnapshot()
// })

// it('should render with props', () => {
//   const component = shallow(<ExerciceTwo numberElements={4} />)

//   expect(component).toMatchSnapshot()
// })

// it('should have allo as a Title', () => {
//   const component = shallow(<ExerciceTwo numberElements={3} />)

//   const Title = component.find('h1').text()
//   console.log(Title)
//   // const TitleText = Title.text()

//   expect(Title).toEqual('Allo')
// })

// it('should have 3 li elements', () => {
//   const component = shallow(<ExerciceTwo numberElements={3} />)

//   const elementList = component.find('li')

//   expect(elementList.length).toEqual(3)
// })

// it('should have 150 li elements', () => {
//   const component = shallow(<ExerciceTwo numberElements={150} />)

//   const elementList = component.find('li')

//   expect(elementList.length).toEqual(150)
// })
