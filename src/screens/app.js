import React from 'react';

import Square from '../components/square';

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
      <Square color="green"/>
      <Square />
      <Square color="red"></Square>
      <Square color="orange"></Square>
      <Square color="green"></Square>
      <Square></Square>
      Animation
      <Square initialPose="start" pose="end"></Square>
      <Square pose={this.state.animation}></Square>
    </div>
  );
}

  }


export default App;
