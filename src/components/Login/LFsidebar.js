import React, { Component } from 'react'
import Logo from '../Common/Logo'
import { brandcolor } from '../../styles/colors'
import './LFsidebar.css'

export default class LoginSidebar extends Component {
  render() {
    return (
      <div className="lfsidebar">
        <Logo size={81} color={brandcolor} className="lfsidebar-logo" />
      </div>
    )
  }
}
