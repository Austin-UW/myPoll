export { reducer } from './reducers/reducer'
export { defaultState, getClassSnackbarVariant, getStylesHeader } from './utils/utils'
export { Dispatch } from 'redux'
export {
  closeSnackbar, openSnackbar
} from './utils/actions'
export { SnackbarRoot } from './all-page/snackbarRoot'
export { Header } from './all-page/header'
export { withSnack } from './hocs/snackbar'
export { NoMatch } from './all-page/noMatch'
export { store } from './utils/wrapper'
/** @todo DON'T import from this but its there because I dunno but stop asking */
export {
  State, Variant, Snackbar, Option, Options, Poll,
  Polls, Action
} from './types'
export { PollContainer } from './poll/poll'
export { Home } from './home/home'
export { CreatePoll } from './create-poll/create-poll'
