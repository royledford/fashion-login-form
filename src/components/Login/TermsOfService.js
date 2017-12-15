import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
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
    const actions = [
      <FlatButton label="Close" labelStyle={{ color: brandcolor }} primary={true} onClick={this.handleClose} />,
    ]

    if (directToSignup) {
      return <Redirect to="/signup" />
    } else {
      return (
        <Dialog
          title="Terms of Service"
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div>
            <p>
              Welcome to ||companyname||! ||companyname|| (as defined below) is provided by ||companyname||, Inc. (“we”,
              “our” or “us”). These terms of service (these “Terms of Service”) govern your or the organization that you
              represent (“you,”“your” or “Client”) access to, interaction with and use of the www.||companyname||.com
              website and its subdomains (the “Website”), downloadable applications we make available to you
              (collectively, the “App”), the mobile devices provided to you by ||companyname||, Inc., and all software
              and services provided by us via the Website and App (collectively, “Services”).
            </p>

            <p>
              These Terms of Service constitute the “Agreement” between you and ||companyname||, Inc. Capitalized terms
              used but not defined herein shall have the meaning set forth in the app.
            </p>
          </div>
        </Dialog>
      )
    }
  }
}
