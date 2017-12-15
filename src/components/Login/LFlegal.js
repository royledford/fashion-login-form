import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './LFlegal.css'

export default class LFlegal extends Component {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }

  render() {
    const { className } = this.props
    return (
      <div className={`lflegal-wrap ${className}`}>
        <span>By signing up you agree to the Fashion</span>
        <br />
        <span>
          <Link to="/terms">Terms and Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
        </span>
      </div>
    )
  }
}
