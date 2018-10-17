import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NoMatch, PollRender, Home, CreatePoll, PollsContainer, AuthRender } from '../exports'
/**
 * @returns {JSX} renders and handles all of the routing
 * @description Handles react-router routing and renders all route components, only one at a time
 */

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/polls'} component={PollsContainer} />
        <Route path={'/create-poll'} component={CreatePoll} />
        <Route path={'/login'} render={() => <AuthRender authType="login" />} />
        <Route path={'/register'} render={() => <AuthRender authType="register" />} />
        <Route path={'/poll/:id'} render={(props) => <PollRender id={props.match.params.id} />} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

