import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './LFswitchLink.css'

export default class LFswitchLink extends Component {
  static propTypes = {
    linkTo: PropTypes.oneOf(['login', 'signup']),
    className: PropTypes.string,
  }
  static defaultProps = {
    linkTo: 'login',
    className: '',
  }

  render() {
    const { linkTo, className } = this.props
    let link = (
      <p>
        Have an account?<Link to="/login">Login</Link>
      </p>
    )

    if (linkTo === 'signup') {
      link = (
        <p>
          Need an account?<Link to="/signup">Sign up</Link>
        </p>
      )
    }

    return <div className={`lfswitchlink-text ${className}`}>{link}</div>
  }
}
