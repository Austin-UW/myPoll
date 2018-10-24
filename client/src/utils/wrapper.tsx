import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from './router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, SnackbarRoot, defaultState } from '../exports'
import thunk from 'redux-thunk'
import { theme } from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { setToken } from './api'
import { setCurrentUser, addError } from './actions'
import decode from 'jwt-decode'
export const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(thunk)))
if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken)
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setCurrentUser(null))
    store.dispatch(addError(err))
  }
}

const Wrapper = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <SnackbarRoot />
        <Router />
      </MuiThemeProvider>
    </Provider>
  )
}
export default Wrapper
