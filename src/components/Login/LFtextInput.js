import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LFtextInput.css'

export default class LFtextInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
  }
  static defaultProps = {
    type: 'input',
    className: '',
    errorMessage: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      focused: false,
    }
    this.setFocus = this.setFocus.bind(this)
    this.removeFocus = this.removeFocus.bind(this)
  }

  componentWillMount() {
    this.setState({ hasError: this.props.errorMessage !== '' })
  }

  setFocus() {
    if (!this.state.focused) this.setState({ focused: true })
    this.emailInput.focus()
  }

  removeFocus() {
    this.setState({ focused: false })
  }

  render() {
    const { id, value, label, type, errorMessage, className } = this.props
    const { focused } = this.state

    let focusClass = ''
    if (focused) focusClass = 'lftextinput-showfocus'

    return (
      <div className={`lftextinput-wrap ${className}`} onClick={this.setFocus}>
        <div className={`lftextinput-focus ${focusClass}`} />
        <label className="lftextinput-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={input => {
            this.emailInput = input
          }}
          value={value}
          className={'lftextinput-input'}
          type={type}
          onFocus={this.setFocus}
          onBlur={this.removeFocus}
        />
        <span className="lftextinput-error">{errorMessage}</span>
      </div>
    )
  }
}
