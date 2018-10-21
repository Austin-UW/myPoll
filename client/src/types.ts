export type Variant = 'success' | 'warning' | 'error'
export type User = {
  iat: number
  id: string,
  username: string
} | null
export type Snackbar = {
  open: false
  message: string
  variant: Variant
}
export type Option = {
  _id: string
  name: string
  votes: number
}
export type Options = Option[]
export type Poll = {
  _id: string
  question: string
  votes: number
  options: Options
  user: {
    _id: string,
    username: string
  }
}
// export type User = {}
export type Polls = Poll[]

export type State = {
  snackbar: Snackbar
  polls: Polls
  userPolls: Polls
  auth: {
    isAuthenticated: boolean
    user: User
  }
  currentPoll: Poll | null
  isLoading: boolean
  error: {
    message: string | null
  }
}
// used in api.ts
export type Action = Readonly<{ type: 'OPEN_SNACKBAR'; message: string; variant: Variant }
  | { type: 'CLOSE_SNACKBAR' }
  | { type: 'SET_POLLS', polls: Polls }
  | { type: 'SET_CURRENT_POLL', poll: Poll }
  | { type: 'ADD_ERROR', error: string }
  | { type: 'REMOVE_ERROR' }
  | { type: 'SET_CURRENT_USER', user: User }
  | { type: 'START_LOADING' }
  | { type: 'STOP_LOADING' }
  | { type: 'SET_USER_POLLS', polls: Polls }>
