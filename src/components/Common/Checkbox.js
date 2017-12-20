import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    someProp: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
  }
  static defaultProps = {
    disabled: false,
  }

  render() {
    const { id, name, disabled, checked } = this.props
    return (
      <label htmlFor={id} className="checkbox checkbox-check">
        Remember me
        <input type="checkbox" name={name} id={id} checked={checked} disabled={disabled} />
        <div className="checkbox-box" />
      </label>
    )
  }
}
