import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LFsidebar from './LFsidebar'
import LFswitchLink from './LFswitchLink'
import LFbanner from './LFbanner'
import LFmessage from './LFmessage'
import LFtextInput from './LFtextInput'
import LFbutton from './LFbutton'

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

    const message = 'Enter your email address to join the fashonistas.'

    return (
      <div className="signup-wrap">
        <div className="signup-form">
          <LFsidebar />
          <div className="signup-content">
            <LFswitchLink linkTo="login" className="signup-switch" />
            <LFbanner className="signup-banner" />
            <LFmessage message={message} className="signup-message" />
            <LFtextInput
              className="signup-email"
              value={email}
              id="email"
              type="email"
              label="Email address"
              errorMessage={errorEmail}
            />
            <LFbutton label="Next" className="signup-button" onClick={this.props.handleNextClick} />
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
