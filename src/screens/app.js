import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Square from '../components/square';

import allTheActions from '../actions';

class App extends React.Component{

  state={
    animation:'start'
  }

  componentDidMount(){
    console.log(this.props);
    this.props.actions.characters.getCharacters();
    this.checkToken();
    // axios.get('http://www.mocky.io/v2/5dd504b63300002d00f37d4f').then(r => {console.log(r);}).catch(err => err);

    this.interval = setInterval(() => {
      this.setState({animation: this.state.animation === 'start' ? 'end' : 'start'});
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  connect = () => {
    const {history} = this.props;
    // appel axios normalement
    localStorage.setItem('token', 'BonjourLesAmis');
    history.push('/ranking');
  }


  checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.history.push('/ranking');
    }
  }



  render(){
    const {actions : {counter : actionsCounter}} = this.props;
  return (
    <div className="App">
      <p>{this.props.counterState.counter}</p>
      <button onClick={() => actionsCounter.counterDecrement(1)}>-</button>
      <button onClick={() => actionsCounter.counterIncrement(1)}>+</button>
      <Square color="green" pose={this.state.animation}/>
      {this.props.charactersState.characters.map(c => <p>{c.name}</p>)}
      <button onClick={this.connect}>Se connecter</button>
    </div>
  );
}
}


const mapStateToProps = state => ({
  counterState: state.counter,
  charactersState: state.characters,
});

const mapDispatchToProps = () => dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch),
    characters: bindActionCreators(allTheActions.characters, dispatch),
}});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);