import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NoMatch, PollContainer, Home } from '../exports'
/**
 * @returns {JSX} renders and handles all of the routing
 * @description Handles react-router routing and renders all route components, only one at a time
 */
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/poll/:id'} render={(props) => <PollContainer id={props.match.params.id} />} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}
