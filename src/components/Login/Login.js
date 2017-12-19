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

import { brandcolor } from '../../styles/colors'
import './Login.css'

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
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    loading: false,
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
      onSubmit,
      loading,
    } = this.props

    let disableButton = false

    if (loading) {
      // passwordDisplay = 'signup-hide-up'
      // toEmailDisplay = 'signup-hide-up'
      // loaderDisplay = 'signup-show'
      disableButton = true
    }
    const message = 'Welcome back fashionista. Please login to part of the experience!'

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
            errorMessage={errorEmail}
            onBlur={onEmailBlur}
            className="login-input"
            label="Email address"
          />
          <LFtextInput
            floatingLabelText="Password"
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            // errorMessage={errorPassword}
            errorMessage="test error"
            onBlur={onPasswordBlur}
            label="Password"
          />
          <LFbutton
            label="Sign In"
            className="signup-button"
            type="submit"
            disabled={disableButton}
            onClick={onSubmit}
          />
        </form>
        <Link className="login-forgot" to="/forgot">
          Forgot password?
        </Link>
      </div>
    )
  }
}
