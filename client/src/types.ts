export type Variant = 'success' | 'warning' | 'error'

export type Snackbar = {
  open: false
  message: string
  variant: Variant
}
export type Option = {
  _id: any
  name: string,
  votes: number
}
export type Options = Option[]
export type Poll = {
  _id: any
  question: string
  votes: number
  options: Options
  user: string /** @todo check if this should be number when sent to react thanks */
}
// export type User = {}
export type Polls = Poll[]

export type State = Readonly<{
  snackbar: Snackbar
  polls: Polls
  auth: {
    isAuthenticated: boolean
    user: any
  }
  currentPoll: Poll | null
  isLoading: boolean
  error: {
    message: string | null
  }
}>
// used in api.ts
export type Action = Readonly<{ type: 'OPEN_SNACKBAR'; message: string; variant: Variant }
  | { type: 'CLOSE_SNACKBAR' }
  | { type: 'SET_POLLS', polls: Polls }
  | { type: 'SET_CURRENT_POLL', poll: Poll }
  | { type: 'ADD_ERROR', error: any }
  | { type: 'REMOVE_ERROR' }
  | { type: 'SET_CURRENT_USER', user: any }>
