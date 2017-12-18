import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class IconEye extends Component {
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
      <svg
        className={className}
        onClick={this.props.onClick}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000">
        <g fill={color}>
          <path d="M990,498.5c0,94.9-202.1,297.1-490,297.1c-281.8,0-490-199.1-490-297.1s211.3-294,490-294C790.9,204.5,990,400.5,990,498.5L990,498.5z M500,256.5c-131.7,0-235.8,107.2-235.8,241.9S371.4,740.4,500,740.4c131.7,0,235.8-107.2,235.8-241.9S631.7,256.5,500,256.5L500,256.5z M500,345.3c-82.7,0-150.1,67.4-150.1,153.1S417.3,651.6,500,651.6s150.1-67.4,150.1-153.1S582.7,345.3,500,345.3L500,345.3z" />
        </g>
      </svg>
    )
  }
}
