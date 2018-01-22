import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { emailValid, passwordValid } from '../../helpers/validation'
import Login from './Login'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      remember: false,

      emailErrorMsg: '',
      showEmailErrorAnimation: false,
      passwordErrorMsg: '',
      showPasswordErrorAnimation: false,

      errorMsg: '',
      redirectToHome: false,
      loading: false,
      submitFailed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailValidation = this.handleEmailValidation.bind(this)
    this.handleRememberChange = this.handleRememberChange.bind(this)
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value, showEmailErrorAnimation: false })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value, showPasswordErrorAnimation: false })
  }

  handleRememberChange = event => {
    this.setState({ remember: !this.state.remember })
  }

  handleEmailBlur = () => {
    if (!this.state.submitFailed) return
    this.handleEmailValidation()
  }

  handlePasswordBlur = () => {
    if (!this.state.submitFailed) return
    this.handlePasswordValidation()
  }

  handleEmailValidation = event => {
    const emailCheck = emailValid(this.state.email)

    if (emailCheck.valid) {
      this.setState({ emailErrorMsg: '' })
    } else {
      this.setState({ emailErrorMsg: emailCheck.message, showEmailErrorAnimation: true })
    }
  }

  handlePasswordValidation = event => {
    const passwordCheck = passwordValid(this.state.password)

    if (passwordCheck.valid) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: passwordCheck.message, showPasswordErrorAnimation: true })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const emailCheck = emailValid(this.state.email)
    const passwordCheck = passwordValid(this.state.password)

    if (emailCheck.valid && passwordCheck.valid) {
      this.setState({ loading: true })

      // Fake a wait time for the loader
      setTimeout(() => {
        this.cancelLoader()
      }, 1500)
    } else {
      this.setState({ submitFailed: true, redirectToHome: false })
      this.handleEmailValidation()
      this.handlePasswordValidation()
    }
  }

  cancelLoader = () => {
    this.setState({ redirectToHome: true })
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
      redirectToHome,
      loading,
    } = this.state

    if (redirectToHome) {
      return <Redirect to="/" />
    } else {
      return (
        <Login
          email={email}
          password={password}
          remember={remember}
          emailErrorMsg={emailErrorMsg}
          showEmailErrorAnimation={showEmailErrorAnimation}
          passwordErrorMsg={passwordErrorMsg}
          showPasswordErrorAnimation={showPasswordErrorAnimation}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onRememberChange={this.handleRememberChange}
          onSubmit={this.handleSubmit}
          onEmailBlur={this.handleEmailBlur}
          onPasswordBlur={this.handlePasswordBlur}
          loading={loading}
        />
      )
    }
  }
}
