import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardSidebar from './CardSidebar'

import './PageCard.css'

export default class PageCard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="pagecard-wrap">
        <div className="pagecard-form">
          <CardSidebar />
          <div className="pagecard-content">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
