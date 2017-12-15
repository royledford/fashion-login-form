import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  emailValid,
  passwordValid,
  passwordConfirmValid,
  getEmailErrorMsg,
  getPasswordErrorMsg,
  getPasswordConfirmErrorMsg,
} from '../../helpers/validation'
import AuthService from '../../Services/AuthService'
import { getFirstEmailError, getFirstPasswordError } from '../../helpers/helpers'

import Signup from './Signup'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      termsAgreed: false,

      emailErrorMsg: '',
      passwordErrorMsg: '',
      passwordConfirmErrorMsg: '',
      termsAgreedError: false,

      snackMessage: '',
      showSnack: false,
      redirectToHome: false,

      loading: false,
      submitFailed: false,
    }

    this.handleTerms = this.handleTerms.bind(this)
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handlePasswordConfirmChange = event => {
    this.setState({ passwordConfirm: event.target.value })
  }

  handleTerms = event => {
    this.setState(oldState => {
      return {
        termsAgreed: !oldState.termsAgreed,
      }
    })
    if (event.target.checked) {
      this.setState({ termsAgreedError: false })
    }
  }

  handleSnackClosed = () => {
    this.setState({
      showSnack: false,
      snackMessage: '',
    })
  }

  handleEmailValidation = event => {
    if (!this.state.submitFailed) return

    const enteredValue = event.target.value
    if (emailValid(enteredValue)) {
      this.setState({ emailErrorMsg: '' })
    } else {
      this.setState({ emailErrorMsg: getEmailErrorMsg(enteredValue) })
    }
  }

  handlePasswordValidation = event => {
    if (!this.state.submitFailed) return

    const enteredValue = event.target.value
    if (passwordValid(enteredValue)) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: getPasswordErrorMsg(enteredValue) })
    }
  }

  handlePasswordConfirmValidation = event => {
    if (!this.state.submitFailed) return

    const enteredValue = event.target.value
    const password = this.state.password

    if (passwordConfirmValid(password, enteredValue)) {
      this.setState({ passwordConfirmErrorMsg: '' })
    } else {
      this.setState({ passwordConfirmErrorMsg: getPasswordConfirmErrorMsg(password, enteredValue) })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, passwordConfirm, termsAgreed } = this.state

    this.setState({ loading: true })

    if (
      emailValid(email) &&
      passwordValid(password) &&
      passwordConfirmValid(password, passwordConfirm) &&
      termsAgreed
    ) {
      this.signupUser()
    } else {
      const emailMsg = getEmailErrorMsg(email)
      const passwordMsg = getPasswordErrorMsg(password)
      const passwordConfirmMsg = getPasswordConfirmErrorMsg(password, passwordConfirm)

      // build notification message
      let snackMsg = ''
      if (emailMsg || passwordMsg || passwordConfirmMsg) {
        snackMsg = 'Please see above for items that need attention.'
      } else if (!this.state.termsAgreed) {
        snackMsg = 'Please agree to the Terms and Privacy policy before continuing.'
      }

      let termsAgreedError = false
      if (!this.state.termsAgreed) {
        termsAgreedError = true
      }

      this.setState({
        redirectToHome: false,
        emailErrorMsg: emailMsg,
        passwordErrorMsg: passwordMsg,
        passwordConfirmErrorMsg: passwordConfirmMsg,
        termsAgreedError: termsAgreedError,
        snackMessage: snackMsg,
        showSnack: true,
        loading: false,
        submitFailed: true,
      })
    }
  }

  signupUser = () => {
    const self = this
    const userCreateParams = {
      user: {
        email: this.state.email,
        password: this.state.password,
        facebook_token: '',
      },
    }

    AuthService.createUser(userCreateParams)
      .then(function(response) {
        self.loginUser()
      })
      .catch(function(error) {
        if (error.response.status === 400) {
          console.log(error.response.data.errors)

          self.setState({
            emailErrorMsg: getFirstEmailError(error.response.data.errors),
            emailPasswordMsg: getFirstPasswordError(error.response.data.errors),
            loading: false,
          })
        } else {
          // Api server not found
          console.log(`Can't access: ${process.env.REACT_APP_BASE_URL}`)
          console.log(`  Response: ${error.response.status}`)
          self.setState({
            emailErrorMsg: 'An unknown error occurred, please try again later.',
            loading: false,
          })
        }
      })
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
        self.setState({ redirectToHome: true, loading: false })
      })
      .catch(function(error) {
        this.setState({ loading: false })

        // if there is an error here, something really bad happened as the credentials should be correct
        console.log(`Can't access: ${process.env.REACT_APP_BASE_URL}`)
        console.log(`  Response: ${error.response.status}`)
        console.log(`  Errors: ${error.response.data}`)
      })
  }

  render() {
    const {
      email,
      password,
      passwordConfirm,
      termsAgreed,
      emailErrorMsg,
      passwordErrorMsg,
      passwordConfirmErrorMsg,
      termsAgreedError,
      redirectToHome,
      snackMessage,
      showSnack,
      loading,
    } = this.state

    if (redirectToHome) {
      return <Redirect to="/" />
    } else {
      return (
        <Signup
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          termsAgreed={termsAgreed}
          errorEmail={emailErrorMsg}
          errorPassword={passwordErrorMsg}
          errorPasswordConfirm={passwordConfirmErrorMsg}
          errorTermsAgreed={termsAgreedError}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onPasswordConfirmChange={this.handlePasswordConfirmChange}
          onTermsChange={this.handleTerms}
          onSubmit={this.handleSubmit}
          onEmailBlur={this.handleEmailValidation}
          onPasswordBlur={this.handlePasswordValidation}
          onPasswordConfirmBlur={this.handlePasswordConfirmValidation}
          snackMessage={snackMessage}
          showSnack={showSnack}
          onSnackClosed={this.handleSnackClosed}
          loading={loading}
        />
      )
    }
  }
}
