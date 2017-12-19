import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { emailValid, passwordValid, getEmailErrorMsg, getPasswordErrorMsg } from '../../helpers/validation'
import { getFirstEmailError, getFirstPasswordError } from '../../helpers/helpers'
import AuthService from '../../Services/AuthService'
import Login from './Login'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailErrorMsg: '',
      passwordErrorMsg: '',
      snackMessage: '',
      showSnack: false,
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

  handleSnackClosed = () => {
    this.setState({
      showSnack: false,
      snackMessage: '',
    })
  }

  handleEmailValidation = event => {
    if (!this.state.submitFailed) return

    const value = event.target.value

    if (emailValid(value)) {
      this.setState({ emailErrorMsg: '' })
    } else {
      this.setState({ emailErrorMsg: getEmailErrorMsg(value) })
    }
  }

  handlePasswordValidation = event => {
    if (!this.state.submitFailed) return

    const value = event.target.value
    if (passwordValid(value)) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: getPasswordErrorMsg(value) })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state

    if (emailValid(email) && passwordValid(password)) {
      this.setState({ loading: true, submitFailed: false })
      this.loginUser()
    } else {
      this.setState({
        redirectToHome: false,
        emailErrorMsg: getEmailErrorMsg(email),
        passwordErrorMsg: getPasswordErrorMsg(password),
        snackMessage: 'Please see above for items that need attention.',
        showSnack: true,
        submitFailed: true,
      })
    }
  }

  render() {
    const {
      email,
      password,
      emailErrorMsg,
      passwordErrorMsg,
      redirectToHome,
      snackMessage,
      showSnack,
      loading,
    } = this.state

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
          snackMessage={snackMessage}
          showSnack={showSnack}
          onSnackClosed={this.handleSnackClosed}
          loading={loading}
        />
      )
    }
  }
}
