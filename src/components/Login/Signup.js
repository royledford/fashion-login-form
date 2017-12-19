import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LFswitchLink from './LFswitchLink'
import LFbanner from './LFbanner'
import LFmessage from './LFmessage'
import LFtextInput from './LFtextInput'
import LFbutton from './LFbutton'
import LFlegal from './LFlegal'
import LFinputPassword from './LFinputPassword'
import LFloader from './LFloader'

import './Signup.css'

export default class Login extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onEmailBlur: PropTypes.func.isRequired,
    onPasswordBlur: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    showEmail: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    setFocusTo: PropTypes.string,
    showNext: PropTypes.string,
  }
  static defaultProps = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    loading: false,
    setFocusTo: 'email',
    showNext: 'email',
  }

  render() {
    const {
      email,
      password,
      errorEmail,
      errorPassword,
      onEmailChange,
      onPasswordChange,
      onEmailBlur,
      onPasswordBlur,
      onNext,
      loading,
      setFocusTo,
      showNext,
      showEmail,
    } = this.props

    const message =
      showNext === 'email'
        ? 'Enter your email address to join the fashonistas.'
        : 'Create a password to keep the papparazzi out!'

    let emailDisplay = showNext === 'email' ? 'signup-show' : 'signup-hide-up'
    let passwordDisplay = showNext === 'password' ? 'signup-show' : 'signup-hide-dn'
    let toEmailDisplay = showNext === 'password' ? 'signup-to-email-show' : 'signup-to-email-hide'
    let loaderDisplay = 'signup-hide-dn'
    let disableButton = false

    const emailFocused = setFocusTo === 'email' ? true : false
    const passwordFocused = setFocusTo === 'password' ? true : false
    const buttonText = showNext === 'email' ? 'Next' : 'Sign up'

    if (loading) {
      passwordDisplay = 'signup-hide-up'
      toEmailDisplay = 'signup-hide-up'
      loaderDisplay = 'signup-show'
      disableButton = true
    }

    return (
      <div className="signup-content">
        <LFswitchLink linkTo="login" className="signup-switch" />
        <LFbanner className="signup-banner" />
        <LFmessage message={message} className="signup-message" />
        <form onSubmit={onNext}>
          <LFtextInput
            className={`signup-input ${emailDisplay}`}
            value={email}
            id="email"
            type="email"
            label="Email address"
            errorMessage={errorEmail}
            onChange={onEmailChange}
            hasFocus={emailFocused}
          />
          <LFinputPassword
            className={`signup-input ${passwordDisplay}`}
            value={password}
            id="password"
            type="password"
            label="Password"
            errorMessage={errorPassword}
            onChange={onPasswordChange}
            hasFocus={passwordFocused}
          />
          <LFbutton label={buttonText} className="signup-button" type="submit" disabled={disableButton} />
        </form>
        <button type="button" className={`signup-to-email ${toEmailDisplay}`} onClick={showEmail}>
          &lt;&nbsp;Show email
        </button>
        <LFlegal className="signup-legal" />
        <LFloader className={`signup-input ${loaderDisplay}`} />
      </div>
    )
  }
}
