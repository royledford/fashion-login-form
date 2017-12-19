import React, { Component } from 'react'
import Logo from '../Common/Logo'
import { brandcolor } from '../../styles/colors'
import './CardSidebar.css'

export default class CardSidebar extends Component {
  render() {
    return (
      <div className="cardsidebar">
        <Logo size={81} color={brandcolor} className="cardsidebar-logo" />
      </div>
    )
  }
}
