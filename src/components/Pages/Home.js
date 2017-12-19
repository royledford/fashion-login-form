import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h4>Login / Signup form demo</h4>
        <p>
          View the <Link to="/signup">Signup</Link> form
        </p>
        <p>
          View the <Link to="/login">Login</Link> form
        </p>
      </div>
    )
  }
}
