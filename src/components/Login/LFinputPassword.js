import React, { Component } from 'react'
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
    const {
      className,
      value,
      id,
      label,
      errorMessage,
      onChange,
      hasFocus,
      errorPosition,
      onBlur,
      showErrorAnimation,
    } = this.props
    const { inputType } = this.state

    const errorAnimation = showErrorAnimation ? 'error-wiggle' : ''
    return (
      <div className={`lfinputpassword ${className} ${errorAnimation}`}>
        <IconEye className="lfinputpassword-eye" size={25} color={brandcolorLight} onClick={this.handleShowPassword} />
        <LFtextInput
          label={label}
          id={id}
          className="lfinputpassword-input"
          value={value}
          type={inputType}
          errorMessage={errorMessage}
          onChange={onChange}
          hasFocus={hasFocus}
          onBlur={onBlur}
          errorPosition={errorPosition}
        />
      </div>
    )
  }
}
