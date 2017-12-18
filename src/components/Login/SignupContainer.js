import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  emailValid,
  passwordValid,
  passwordConfirmValid,
  getEmailErrorMsg,
  getPasswordErrorMsg,
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

      emailErrorMsg: '',
      passwordErrorMsg: '',

      redirectToHome: false,

      loading: false,
      submitFailed: false,
      setFocusTo: 'email',
      showNext: 'email',
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handlePasswordValidation = () => {
    // if (!this.state.submitFailed) return
    const passwordCheck = passwordValid(this.state.password)

    if (passwordCheck.valid) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: passwordCheck.message, setFocusTo: 'password' })
    }
  }

  handleNext = event => {
    event.preventDefault()

    const emailCheck = emailValid(this.state.email)
    if (emailCheck.valid) {
      this.setState({ emailErrorMsg: '', showNext: 'password', setFocusTo: 'password' })
    } else {
      this.setState({ emailErrorMsg: emailCheck.message, setFocusTo: 'email' })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.handlePasswordValidation()
  }

  backToEmail = () => {
    // called when the password is displayed
    // and the user wants to go back to the email input
    this.setState({
      showNext: 'email',
      setFocusTo: 'email',
    })
  }

  // handleSubmit1 = event => {
  //   // confirm the password is valid
  //   // if we are here, email is valid.
  //   event.preventDefault()
  //   const { password } = this.state

  //   if (passwordValid(password)) {
  //     this.signupUser()
  //   } else {
  //     const emailMsg = getEmailErrorMsg(email)
  //     const passwordMsg = getPasswordErrorMsg(password)

  //     this.setState({
  //       redirectToHome: false,
  //       emailErrorMsg: emailMsg,
  //       passwordErrorMsg: passwordMsg,
  //       snackMessage: snackMsg,
  //       showSnack: true,
  //       loading: false,
  //       submitFailed: true,
  //     })
  //   }
  // }

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
      setFocusTo,
      showNext,
    } = this.state

    const nextAction = showNext === 'email' ? this.handleNext : this.handleSubmit

    if (redirectToHome) {
      return <Redirect to="/" />
    } else {
      return (
        <Signup
          email={email}
          password={password}
          errorEmail={emailErrorMsg}
          errorPassword={passwordErrorMsg}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onNext={nextAction}
          onEmailBlur={this.handleNext}
          onPasswordBlur={this.handlePasswordValidation}
          loading={loading}
          setFocusTo={setFocusTo}
          showNext={showNext}
          showEmail={this.backToEmail}
        />
      )
    }
  }
}
