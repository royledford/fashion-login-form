import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { brandcolor } from '../../styles/colors'

export default class TermsOfService extends Component {
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
          <h2>Terms of Service</h2>
        </div>
      )
    }
  }
}
