import { State, Action } from '../types'

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        snackbar: { open: true, message: action.message, variant: action.variant }
      }
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        snackbar: { ...state.snackbar, open: false }
      }
    case 'SET_CURRENT_USER':
      return {
        auth: {
          ...state.auth,
          isAuthenticated: !!Object.keys(action.user).length, // excuse me what the fuck?
          user: action.user
        }
      }
    case 'ADD_ERROR':
      return {
        ...state,
        error: { ...state.error, message: action.error }
      }
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: { ...state.error, message: null }
      }
    case 'SET_CURRENT_POLL':
      return action.poll
    case 'SET_POLLS':
      return action.polls
    // this probably should be done in the saga but same thing?
    default:
      return state
  }
}
