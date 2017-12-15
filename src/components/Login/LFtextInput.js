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
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentWillMount() {
    this.setState({ hasError: this.props.errorMessage !== '' })
  }

  handleFocus() {
    this.setState({ focused: !this.state.focused })
  }

  render() {
    const { id, value, label, type, errorMessage, className } = this.props
    const { focused } = this.state

    let focusClass = ''
    if (focused) focusClass = 'lftextinput-showfocus'

    return (
      <div className={`lftextinput-wrap ${className}`}>
        <div className={`lftextinput-focus ${focusClass}`} />
        <label className="lftextinput-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          value={value}
          className={'lftextinput-input'}
          type={type}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
        />
        <span className="lftextinput-error">{errorMessage}</span>
      </div>
    )
  }
}
