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

  loginUser = () => {
    const self = this
    const authParams = {
      token_form: {
        email: this.state.email,
        password: this.state.password,
      },
    }

    AuthService.submitLogin(authParams)
      .then(function(response) {
        localStorage.setItem('authToken', response.data.token.key)
        console.log('good')
        self.setState({
          redirectToHome: true,
          loading: false,
        })
      })
      .catch(function(error) {
        if (error.response.status === 400) {
          // There is a problem with the passed credentials.
          self.setState({
            emailErrorMsg: getFirstEmailError(error.response.data.errors),
            emailPasswordMsg: getFirstPasswordError(error.response.data.errors),
            loading: false,
          })
        } else {
          // Api server not found
          console.log(`Can't access: ${process.env.REACT_APP_BASE_URL}`)
          console.log(`  Response: ${error.response.status}`)
          self.setState({ emailErrorMsg: 'An unknown error occurred, please try again later.', loading: false })
        }
      })
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
