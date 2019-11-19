import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator'
// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);

configure(require.context('../src/components', true, /\.stories\.js$/), module);

addDecorator(ThemeDecorator)