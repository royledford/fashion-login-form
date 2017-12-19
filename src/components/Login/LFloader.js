import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFloader.css'

export default class LFloader extends Component {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }

  render() {
    const { className } = this.props
    return (
      <div className={`lfloader-wrap ${className}`}>
        Contacting the runway...
        <div className="lfloader-bg" />
      </div>
    )
  }
}
