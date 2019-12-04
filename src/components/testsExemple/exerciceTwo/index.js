import React from 'react'
import PropTypes from 'prop-types'

class ExerciceTwo extends React.Component {
  createRow = numberElements => {
    let tab = []
    for (let i = 0; i < numberElements; i++) {
      tab.push(<li key={i}>test</li>)
    }
    return tab
  }

  render() {
    const { numberElements } = this.props
    return (
      <React.Fragment>
        <h1>Allo</h1>
        <ul>{this.createRow(numberElements)}</ul>
      </React.Fragment>
    )
  }
}

ExerciceTwo.propTypes = {
  numberElements: PropTypes.number
}

export default ExerciceTwo
