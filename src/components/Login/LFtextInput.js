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
    onChange: PropTypes.func,
    errorPosition: PropTypes.oneOf(['top', 'bottom']),
  }
  static defaultProps = {
    type: 'input',
    className: '',
    errorMessage: '',
    onChange: () => {},
    errorPosition: 'bottom',
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
    this.setState({ hasError: this.props.errorMessage !== '', focused: this.props.hasFocus })
  }

  componentDidMount() {
    if (this.props.hasFocus) this.setFocus()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasFocus) this.setFocus()
  }

  setFocus() {
    if (!this.state.focused) this.setState({ focused: true })

    this.input.focus()
  }

  removeFocus() {
    this.setState({ focused: false })
  }

  handleBlur = () => {
    this.removeFocus()
    if (this.props.onBlur) this.props.onBlur()
  }

  render() {
    const { id, value, label, type, errorMessage, className, onChange, errorPosition } = this.props
    const { focused } = this.state

    let focusClass = ''
    if (focused) focusClass = 'lftextinput-showfocus'

    let errorClass = 'lftextinput-bottom'
    if (errorPosition === 'top') errorClass = 'lftextinput-top'

    return (
      <div className={`lftextinput-wrap ${className}`} onClick={this.setFocus}>
        <label className="lftextinput-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={input => {
            this.input = input
          }}
          value={value}
          className={'lftextinput-input'}
          type={type}
          onFocus={this.setFocus}
          onBlur={this.handleBlur}
          onChange={onChange}
        />
        <div className={`lftextinput-focus ${focusClass}`} />
        <span className={`lftextinput-error ${errorClass}`}>{errorMessage}</span>
      </div>
    )
  }
}
