import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFbutton.css'

export default class LFbutton extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }

  render() {
    const { label, onClick, className } = this.props
    return (
      <button className={`lfbutton ${className}`} onClick={this.props.onClick}>
        {label}
      </button>
    )
  }
}
