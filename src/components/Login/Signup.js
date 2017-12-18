import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LFsidebar from './LFsidebar'
import LFswitchLink from './LFswitchLink'
import LFbanner from './LFbanner'
import LFmessage from './LFmessage'
import LFtextInput from './LFtextInput'
import LFbutton from './LFbutton'
import LFlegal from './LFlegal'

import { brandcolor } from '../../styles/colors'
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

    const message = 'Enter your email address to join the fashonistas.'
    const emailFocused = setFocusTo === 'email' ? true : false
    const passwordFocused = setFocusTo === 'password' ? true : false
    const emailDisplay = showNext === 'email' ? 'signup-email-show' : 'signup-email-hide'
    const passwordDisplay = showNext === 'password' ? 'signup-password-show' : 'signup-password-hide'
    const toEmailDisplay = showNext === 'password' ? 'signup-to-email-show' : 'signup-to-email-hide'
    const buttonText = showNext == 'email' ? 'Next' : 'Sign up'

    return (
      <div className="signup-wrap">
        <div className="signup-form">
          <LFsidebar />
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
              <LFtextInput
                className={`signup-input ${passwordDisplay}`}
                value={password}
                id="password"
                type="password"
                label="Password"
                errorMessage={errorPassword}
                onChange={onPasswordChange}
                hasFocus={passwordFocused}
              />
              <LFbutton label={buttonText} className="signup-button" type="submit" />
            </form>
            <button type="button" className={`signup-to-email ${toEmailDisplay}`} onClick={showEmail}>
              &lt;&nbsp;Back to email
            </button>
            <LFlegal className="signup-legal" />
            {/* <form onSubmit={onSubmit} className="signup-column">
              <input
                hintText="Enter your email"
                floatingLabelText="Email"
                type="text"
                style={styles.input}
                value={email}
                onChange={onEmailChange}
                errorText={errorEmail}
                onBlur={onEmailBlur}
              />
              <input
                hintText="Enter password"
                floatingLabelText="Password"
                type="password"
                style={styles.input}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.labelStyle}
                value={password}
                onChange={onPasswordChange}
                errorText={errorPassword}
                onBlur={onPasswordBlur}
              />
              <button
                label="Sign In"
                type="submit"
                style={styles.button}
                backgroundColor={brandcolor}
                labelColor="#FFF"
                onClick={onSubmit}
              />
            </form>

            <p className="signup-copy">
              Don’t have an account?{' '}
              <Link to="/signup" className="signup-signup">
                Sign Up
              </Link>
            </p>
            <Link className="signup-link" to="/forgot-password">
              Forgot password
            </Link> */}
          </div>
        </div>
      </div>
    )
  }
}
