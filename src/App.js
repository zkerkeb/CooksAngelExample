import React from 'react';
import logo from './logo.svg';
import './App.css';
import posed from 'react-pose';

import styled from 'styled-components';
class App extends React.Component{

  state={
    animation:'start'
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({animation: this.state.animation === 'start' ? 'end' : 'start'});
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
  return (
    <div className="App">
      <Lambda color="green"/>
      <Lambda />
      <LambdaTheme color="red"></LambdaTheme>
      <LambdaTheme color="orange"></LambdaTheme>
      <LambdaTheme color="green"></LambdaTheme>
      <LambdaTheme ></LambdaTheme>
      Animation
      <LambdaAnimated initialPose="start" pose="end"></LambdaAnimated>
      <LambdaAnimated pose={this.state.animation}></LambdaAnimated>
    </div>
  );
}

  }

const Lambda = styled.div`
  margin:20px;
  height: 50px;
  width: 50px;
  background-color: ${props => props.color ? props.color : props.theme.primary};
`;

const LambdaAnimated = posed(Lambda)({
  start: {x: 0, transition: {duration: 1000}},
  end: {x: 100, transition: {duration: 1000}},
});

const LambdaTheme = styled.div`
  margin:20px;
  height: 50px;
  width: 50px;
  background-color: ${props => props.color ?  props.theme.fireColors[props.color]  : props.theme.fireColors.red};
`;


export default App;
