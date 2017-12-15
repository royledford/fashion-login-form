import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Logo from '../Common/Logo'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import LinearProgress from 'material-ui/LinearProgress'
import { brandcolor } from '../../styles/colors'

import './ForgotPassword.css'

export default class ForgotPassword extends Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    errorEmail: PropTypes.string,
    onEmailChange: PropTypes.func.isRequired,
    onEmailBlur: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    snackMessage: PropTypes.string,
    showSnack: PropTypes.bool,
    showConfirmation: PropTypes.bool,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    email: '',
    errorEmail: '',
    snackMessage: '',
    showSnack: false,
    showConfirmation: false,
    loading: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
    }
  }

  render() {
    const {
      email,
      errorEmail,
      onEmailChange,
      onEmailBlur,
      onSubmit,
      snackMessage,
      showSnack,
      onSnackClosed,
      showConfirmation,
      onConfirmationClosed,
      loading,
    } = this.props

    const actions = <FlatButton label="Close" primary={true} keyboardFocused={true} onClick={onConfirmationClosed} />

    const styles = {
      textfield: {
        width: 328,
      },
      button: {
        marginTop: 36,
        width: 128,
      },
      underlineStyle: {
        borderColor: brandcolor,
      },
      labelStyle: {
        color: brandcolor,
      },
    }

    return (
      <div className="forgotpassword-wrap">
        <Paper style={{ width: 370, height: 430 }} zDepth={1}>
          {loading && <LinearProgress mode="indeterminate" />}
          <div className="forgotpassword-column">
            <Logo height="92" width="92" className="forgotpassword-logo" />
            <h1>Forgot your password?</h1>
            <p className="forgotpassword-copy">
              Enter your email address <br /> to reset your password.
            </p>

            <form onSubmit={onSubmit} className="forgotpassword-column">
              <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                type="text"
                style={styles.textfield}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelStyle={styles.labelStyle}
                value={email}
                onChange={onEmailChange}
                errorText={errorEmail}
                onBlur={onEmailBlur}
              />

              <div className="forgotpassword-buttons">
                <RaisedButton label="Cancel" style={styles.button} containerElement={<Link to="/login" />} />
                <RaisedButton
                  label="Reset"
                  type="submit"
                  style={styles.button}
                  backgroundColor={brandcolor}
                  labelColor="#FFF"
                  onClick={onSubmit}
                />
              </div>
            </form>
          </div>
        </Paper>

        <Snackbar
          open={showSnack}
          message={snackMessage}
          autoHideDuration={3000}
          onRequestClose={onSnackClosed}
          bodyStyle={{ backgroundColor: brandcolor }}
        />

        <Dialog
          title="Password Reset"
          actions={actions}
          modal={false}
          open={showConfirmation}
          onRequestClose={onConfirmationClosed}
        >
          Please check your email for instructions on resetting your password.
        </Dialog>
      </div>
    )
  }
}
