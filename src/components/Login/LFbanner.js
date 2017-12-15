import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFbanner.css'

export default class LFbanner extends Component {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }
  render() {
    const { className } = this.props

    return (
      <div className={`lfbanner-wrap ${className}`}>
        <h1 className="lfbanner-text">
          <span>We are&nbsp;</span>
          <div className="lfbanner-rw-words">
            <span>Fashion.</span>
            <span>Forward.</span>
            <span>Fierce.</span>
            <span>Beast.</span>
          </div>
        </h1>
      </div>
    )
  }
}
