import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { emailValid, passwordValid } from '../../helpers/validation'
import { getFirstEmailError, getFirstPasswordError } from '../../helpers/helpers'
import Login from './Login'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailErrorMsg: '',
      passwordErrorMsg: '',
      redirectToHome: false,
      loading: false,
      submitFailed: false,
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleEmailValidation = event => {
    event.preventDefault()

    const emailCheck = emailValid(this.state.email)
    if (emailCheck.valid) {
      this.setState({ emailErrorMsg: '', showNext: 'password', setFocusTo: 'password' })
    } else {
      this.setState({ emailErrorMsg: emailCheck.message, setFocusTo: 'email' })
    }
  }

  handlePasswordValidation = event => {
    const passwordCheck = passwordValid(this.state.password)

    if (passwordCheck.valid) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: passwordCheck.message, setFocusTo: 'password' })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const { email, password, emailErrorMsg, passwordErrorMsg, redirectToHome, loading } = this.state

    if (redirectToHome) {
      return <Redirect to="/" />
    } else {
      return (
        <Login
          email={email}
          password={password}
          errorEmail={emailErrorMsg}
          errorPassword={passwordErrorMsg}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onSubmit={this.handleSubmit}
          onEmailBlur={this.handleEmailValidation}
          onPasswordBlur={this.handlePasswordValidation}
          loading={loading}
        />
      )
    }
  }
}
