import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './vendor/normalize.css'
import './vendor/reset.css'
import './styles/vars.css'
import './styles/base.css'
import './App.css'

import Home from './components/Pages/Home'
import NotFound from './NotFound'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Login/SignupContainer'
import TermsOfService from './components/Login/TermsOfService'
import Privacy from './components/Login/PrivacyPolicy'
import PageShell from './components/Animate/PageShell'
import PageCard from './components/Pages/PageCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <PageCard>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={PageShell(Home)} />
              <Route path={process.env.PUBLIC_URL + 'fashion-login-form/login'} component={PageShell(LoginContainer)} />
              <Route
                path={process.env.PUBLIC_URL + 'fashion-login-form/signup'}
                component={PageShell(SignupContainer)}
              />
              <Route path={process.env.PUBLIC_URL + 'fashion-login-form/terms'} component={TermsOfService} />
              <Route path={process.env.PUBLIC_URL + 'fashion-login-form/privacy'} component={Privacy} />
              console.log(process.env.PUBLIC_URL)
              <Route component={NotFound} />
            </Switch>
          </PageCard>
        </Router>
      </div>
    )
  }
}

export default App
