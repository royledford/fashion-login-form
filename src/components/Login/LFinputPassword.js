import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LFtextInput from './LFtextInput'
import IconEye from '../Common/IconEye'
import { brandcolorLight } from '..//../styles/colors'

import './LFinputPassword.css'

export default class LFinputPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputType: 'password',
    }
  }

  handleShowPassword = () => {
    if (this.state.inputType === 'password') {
      this.setState({ inputType: 'text' })
    } else {
      this.setState({ inputType: 'password' })
    }
  }

  render() {
    const { className, value, id, label, errorMessage, onChange, hasFocus } = this.props
    const { inputType } = this.state
    return (
      <div className={className}>
        <IconEye className="lfinputpassword-eye" size={25} color={brandcolorLight} onClick={this.handleShowPassword} />
        <LFtextInput
          label={label}
          id={id}
          value={value}
          type={inputType}
          errorMessage={errorMessage}
          onChange={onChange}
          hasFocus={hasFocus}
        />
      </div>
    )
  }
}
