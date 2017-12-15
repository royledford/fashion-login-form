import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Logo extends Component {
  static propTypes = {
    size: PropTypes.number,
    className: PropTypes.string,
    color: PropTypes.string,
  }
  static defaultProps = {
    size: 50,
    className: '',
    color: '#444',
  }

  render() {
    const { size, className, color } = this.props
    const width = size
    const height = size

    return (
      <div className={className}>
        <svg id="logo" width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 75">
          <title>Logo</title>
          <g fill={color}>
            <g>
              <path d="M47,22.5v9.67H21.79V44.24H43.68v8.93H21.79V74.76H10.3V22.5Z" transform="translate(-6 -11.5)" />
              <path
                d="M70.46,22.5,90,74.76H78.07L74.12,63.12H54.58l-4.1,11.64H38.92L58.68,22.5Zm.66,32.06L64.53,35.39h-.14L57.58,54.56Z"
                transform="translate(-6 -11.5)"
              />
            </g>
            <polyline
              fill="none"
              strokeMiterlimit={10}
              stroke={color}
              points="74.5 65.75 74.5 74.5 37.5 74.5 0.5 74.5 0.5 37.5 0.5 0.5 37.5 0.5 74.5 0.5 74.5 27.5"
            />
            <g fill="none" strokeMiterlimit={10} stroke={color}>
              <path d="M80.5,77.25" transform="translate(-6 -11.5)" />
              <path d="M80.5,49" transform="translate(-6 -11.5)" />
              <path d="M80.5,43.25" transform="translate(-6 -11.5)" />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
