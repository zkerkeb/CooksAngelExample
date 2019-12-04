import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Ranking extends Component {

  disconnect = () => {
  const {history} = this.props;
  localStorage.removeItem('token');
  history.push('/');
  }

  render() {
    return (
      <div>
        <p>coucou</p>
        <button onClick={this.disconnect}>se deconnecter</button>
      </div>

    );
  }
}

Ranking.propTypes = {

};

export default Ranking;