import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LFsidebar from './LFsidebar'
import LFswitchLink from './LFswitchLink'

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
    snackMessage: PropTypes.string,
    showSnack: PropTypes.bool,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    snackMessage: '',
    showSnack: '',
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
      snackMessage,
      showSnack,
      onSnackClosed,
      loading,
    } = this.props

    const styles = {
      input: {
        width: 328,
      },
      button: {
        marginTop: 36,
        width: 328,
      },
      underlineStyle: {
        borderColor: brandcolor,
      },
      labelStyle: {
        color: brandcolor,
      },
    }

    return (
      <div className="login-wrap">
        <div className="login-form">
          <LFsidebar />
          <div className="login-content">
            <LFswitchLink linkTo="signup" />
            <form onSubmit={onSubmit} className="login-column">
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

            <p className="login-copy">
              Don’t have an account?{' '}
              <Link to="/signup" className="login-signup">
                Sign Up
              </Link>
            </p>
            <Link className="login-link" to="/forgot-password">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
