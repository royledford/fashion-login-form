import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './vendor/normalize.css'
import './vendor/reset.css'
import './styles/vars.css'
import './styles/base.css'
import './App.css'

import NotFound from './NotFound'
// import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Login/SignupContainer'
import TermsOfService from './components/Login/TermsOfService'
import Privacy from './components/Login/PrivacyPolicy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route path="/login" component={LoginContainer} /> */}
            <Route path="/signup" component={SignupContainer} />
            <Route path="/terms" component={TermsOfService} />
            <Route path="/privacy" component={Privacy} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
