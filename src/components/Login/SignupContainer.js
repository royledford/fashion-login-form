import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { emailValid, passwordValid } from '../../helpers/validation'

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

    // Only continue if password passes validation
    if (this.state.passwordErrorMsg !== '') return

    this.setState({ loading: true })

    // Fake a wait time for creating the user.
    setTimeout(() => {
      this.cancelLoader()
    }, 1500)
  }

  backToEmail = () => {
    // called when the password is displayed
    // and the user wants to go back to the email input
    this.setState({
      showNext: 'email',
      setFocusTo: 'email',
    })
  }

  cancelLoader = () => {
    this.setState({ redirectToHome: true })
  }

  render() {
    const {
      email,
      password,
      emailErrorMsg,
      passwordErrorMsg,
      redirectToHome,
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
