import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFbutton.css'

export default class LFbutton extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
  }
  static defaultProps = {
    className: '',
    type: '',
    disabled: false,
  }

  render() {
    const { label, onClick, className, type, disabled } = this.props
    return (
      <button className={`lfbutton ${className}`} type={type} disabled={disabled}>
        {label}
      </button>
    )
  }
}
