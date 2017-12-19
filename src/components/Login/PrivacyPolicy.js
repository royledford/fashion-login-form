import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      directToSignup: false,
    }
  }

  handleClose = () => {
    this.setState({ directToSignup: true })
  }

  render() {
    const { directToSignup } = this.state

    if (directToSignup) {
      return <Redirect to="/signup" />
    } else {
      return (
        <div>
          <h2>Privacy Policy</h2>
        </div>
      )
    }
  }
}
