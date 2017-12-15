import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { emailValid, getEmailErrorMsg } from '../../helpers/validation'
import ForgotPassword from './ForgotPassword'
import AuthService from '../../Services/AuthService'
import { getFirstEmailError } from '../../helpers/helpers'

export default class ForgotPasswordContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',

      emailErrorMsg: '',
      snackMessage: '',

      showSnack: false,
      showConfirmation: false,
      redirectToLogin: false,

      loading: false,
      submitFailed: false,
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleSnackClosed = () => {
    this.setState({
      showSnack: false,
      snackMessage: '',
    })
  }

  handleConfirmationClosed = () => {
    this.setState({ showConfirmation: false, redirectToLogin: true })
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

  handleSubmit = event => {
    // debugger
    event.preventDefault()
    const { email } = this.state
    if (emailValid(email)) {
      this.setState({ loading: true })
      this.submitResetRequest()
    } else {
      this.setState({
        redirectToLogin: false,
        emailErrorMsg: getEmailErrorMsg(email),
        snackMessage: 'Please see above for items that need attention.',
        showSnack: true,
      })
    }
  }

  submitResetRequest = () => {
    const self = this
    const authParams = {
      password_reset_token_form: {
        email: this.state.email,
      },
    }

    AuthService.resetPassword(authParams)
      .then(function(response) {
        self.setState({ showConfirmation: true, loading: false })
      })
      .catch(function(error) {
        if (error.response.status === 400) {
          self.setState({
            showConfirmation: false,
            loading: false,
            emailErrorMsg: getFirstEmailError(error.response.data.errors),
          })
        } else {
          self.setState({
            showConfirmation: false,
            loading: false,
            emailErrorMsg: 'There was a problem reseting your password. Please contact support.',
          })

          // if there is an error here, something really bad happened like the server is down.
          console.error(`Can't access: ${process.env.REACT_APP_BASE_URL}`)
          console.error(`Response: ${error.response.status}`)
          console.error(`Errors: ${error.response.data}`)
        }
      })
  }

  render() {
    const { email, emailErrorMsg, redirectToLogin, snackMessage, showSnack, showConfirmation, loading } = this.state

    if (redirectToLogin) {
      return <Redirect to="/login" />
    } else {
      return (
        <ForgotPassword
          email={email}
          errorEmail={emailErrorMsg}
          onEmailChange={this.handleEmailChange}
          onSubmit={this.handleSubmit}
          onEmailBlur={this.handleEmailValidation}
          snackMessage={snackMessage}
          showSnack={showSnack}
          onSnackClosed={this.handleSnackClosed}
          showConfirmation={showConfirmation}
          onConfirmationClosed={this.handleConfirmationClosed}
          loading={loading}
        />
      )
    }
  }
}
