import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LFswitchLink from './LFswitchLink'
import LFbanner from './LFbanner'
import LFmessage from './LFmessage'
import LFtextInput from './LFtextInput'
import LFbutton from './LFbutton'
import LFinputPassword from './LFinputPassword'
import LFloader from './LFloader'
import Checkbox from '../Common/Checkbox'

import './Login.css'

export default class Login extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    remember: PropTypes.bool,
    emailErrorMsg: PropTypes.string,
    showEmailErrorAnimation: PropTypes.bool,
    passwordErrorMsg: PropTypes.string,
    showPasswordErrorAnimation: PropTypes.bool,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onRememberChange: PropTypes.func.isRequired,
    onEmailBlur: PropTypes.func.isRequired,
    onPasswordBlur: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    password: '',
    remember: false,
    emailErrorMsg: '',
    showEmailErrorAnimation: false,
    passwordErrorMsg: '',
    showPasswordErrorAnimation: false,
    loading: false,
  }

  render() {
    const {
      email,
      password,
      remember,
      emailErrorMsg,
      showEmailErrorAnimation,
      passwordErrorMsg,
      showPasswordErrorAnimation,
      onEmailChange,
      onPasswordChange,
      onRememberChange,
      onEmailBlur,
      onPasswordBlur,
      onSubmit,
      loading,
    } = this.props

    const message = 'Welcome back fashionista. Please login to be a part of the experience!'

    let passwordDisplay = ''
    let emailDisplay = ''
    let loaderDisplay = 'login-loader-hide'
    let disableButton = false
    if (loading) {
      passwordDisplay = 'login-hide-up'
      emailDisplay = 'login-hide-up'
      loaderDisplay = 'login-loader-show'
      disableButton = true
    }

    return (
      <div className="login-content">
        <LFswitchLink linkTo="signup" className="login-switch" />
        <LFbanner className="login-banner" />
        <LFmessage message={message} className="login-message" />

        <form onSubmit={onSubmit}>
          <LFtextInput
            type="text"
            id="email"
            value={email}
            onChange={onEmailChange}
            errorMessage={emailErrorMsg}
            showErrorAnimation={showEmailErrorAnimation}
            onBlur={onEmailBlur}
            className={`login-input ${emailDisplay}`}
            label="Email address"
            errorPosition="top"
            autoFocus={true}
          />
          <LFinputPassword
            floatingLabelText="Password"
            type="password"
            id="password"
            className={`login-input ${passwordDisplay}`}
            value={password}
            onChange={onPasswordChange}
            errorMessage={passwordErrorMsg}
            showErrorAnimation={showPasswordErrorAnimation}
            onBlur={onPasswordBlur}
            label="Password"
            errorPosition="bottom"
          />
          <LFbutton
            label="Sign In"
            className="login-button"
            type="submit"
            disabled={disableButton}
            onClick={onSubmit}
          />
        </form>
        <div className="login-rem">
          <Checkbox id="remember" label="Remember Me" checked={remember} onChange={onRememberChange} />
        </div>
        <Link className="login-forgot" to="/">
          Forgot password?
        </Link>
        <LFloader className={`login-loader ${loaderDisplay}`} />
      </div>
    )
  }
}
