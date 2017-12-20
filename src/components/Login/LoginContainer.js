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
      emailErrorMsg: '',
      passwordErrorMsg: '',
      errorMsg: '',
      redirectToHome: false,
      loading: false,
      submitFailed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailValidation = this.handleEmailValidation.bind(this)
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
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
      this.setState({ emailErrorMsg: emailCheck.message })
    }
  }

  handlePasswordValidation = event => {
    const passwordCheck = passwordValid(this.state.password)

    if (passwordCheck.valid) {
      this.setState({ passwordErrorMsg: '' })
    } else {
      this.setState({ passwordErrorMsg: passwordCheck.message })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const emailCheck = emailValid(this.state.email)
    const passwordCheck = passwordValid(this.state.password)

    if (emailCheck.valid && passwordCheck.valid) {
      this.setState({ redirectToHome: true })
    } else {
      this.setState({ submitFailed: true, redirectToHome: false })
      this.handleEmailValidation()
      this.handlePasswordValidation()
    }
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
          emailErrorMsg={emailErrorMsg}
          passwordErrorMsg={passwordErrorMsg}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          onSubmit={this.handleSubmit}
          onEmailBlur={this.handleEmailBlur}
          onPasswordBlur={this.handlePasswordBlur}
          loading={loading}
        />
      )
    }
  }
}
