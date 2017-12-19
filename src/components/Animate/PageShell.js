import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './PageShell.css'

const PageShell = Page => {
  return props => (
    <CSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName={'dissolve'}>
      <Page {...props} />
    </CSSTransitionGroup>
  )
}

export default PageShell
