import React from 'react';
import Square from './index';

export default {
  title: 'Square',
};

export const SquareDefault = () => <Square />;

SquareDefault.story = {
  name: 'Square',
};

export const SquareAnimated = () => <Square  pose="end"/>;

SquareAnimated.story = {
  name: 'Square Animated',
};
