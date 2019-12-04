import React from 'react'

import axios from 'axios'
import './index.css'

export default class getHouse extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.getHouse()
  }

  getHouse = () => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
      .then(res => {
        this.setState({ characters: res.data })
      })
      .catch(err => {
        // console.log(err)
      })
  }

  render() {
    return (
      <div className="container">
        <p>call en cours</p>
        <div>
          {this.state.characters.map((character, index) => (
            <p key={index}>{character.name}</p>
          ))}
        </div>
      </div>
    )
  }
}
