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
    // this probably should be done in the saga but same thing?
    default:
      return state
  }
}
