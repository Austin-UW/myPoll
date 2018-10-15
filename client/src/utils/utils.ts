import { Variant, State } from '../types'
/**
 * @description default Redux state to be used only for development
 * @property {boolean} isLoading whether or not we are fetching data from server, could become an object.
 */
export const defaultState: State = {
  snackbar: {
    open: false,
    message: 'WE ARE IN BOIS, HOLD YOUR GROUND',
    variant: 'success'
  },
  authenticated: false,
  polls: [],
  isLoading: true
}

/**
 * @description used in snackbarRoot to determine how to display snackbar based on state.snackbar.variant
 * @returns {JSX inline style} whether or not to load an error icon with red or success + green etc.
 */
type Classes = { success: string; warning: string; error: string }
export const getClassSnackbarVariant = (variant: Variant, classes: Classes) => {
  if (variant === 'success') { return classes.success }
  else if (variant === 'warning') { return classes.warning }
  else if (variant === 'error') { return classes.error }
  else { return classes.error }
}

/** @returns {JSX style} inline style */
export const getStylesHeader = (conditionTrue: boolean): { textDecoration: 'underline' } | {} => {
  // whether or not to underline text in header
  if (conditionTrue) {
    return { textDecoration: 'underline' }
  }
  else {
    return {} // no styles
  }
}
