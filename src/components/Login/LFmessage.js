import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFmessage.css'

export default class LFmessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }
  render() {
    const { message, className } = this.props
    return <p className={`lfmessage ${className}`}>{message}</p>
  }
}
