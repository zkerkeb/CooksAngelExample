import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class LocalStorageSet extends React.Component {
  static propTypes = {
    data: PropTypes.string
  }

  componentDidMount() {
    localStorage.setItem('data', this.props.data)
  }

  render() {
    const { data } = this.props

    return (
      <div className="LocalStorageContainer">
        <p>{data}</p>
      </div>
    )
  }
}

LocalStorageSet.defaultProps = {
  data: 'test'
}
