import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';

const theme = {
  primary: 'blue',
  fireColors: {
    red: 'red',
    green: 'green',
    orange: 'orange'
  }
};

class Index extends React.Component{
  render(){
    return(
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
    );
  }
}

ReactDOM.render(<Index></Index>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
