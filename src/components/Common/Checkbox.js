import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    disabled: false,
    checked: false,
  }

  render() {
    const { id, name, disabled, checked, onChange } = this.props
    return (
      <label htmlFor={id} className="checkbox checkbox-check">
        Remember me
        <input type="checkbox" name={name} id={id} onChange={onChange} checked={checked} disabled={disabled} />
        <div className="checkbox-box" />
      </label>
    )
  }
}
