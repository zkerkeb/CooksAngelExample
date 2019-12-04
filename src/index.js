import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import Routes from './config/routes';

import theme from './config/theme';

import {store} from './config/store';

import './config/axios';

class Index extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
    );
  }
}

ReactDOM.render(<Index></Index>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
