export type Variant = 'success' | 'warning' | 'error'

export type Snackbar = {
  open: false
  message: string
  variant: Variant
}
export type Option = {
  name: string,
  votes: number
}
export type Options = Option[]
export type Poll = {
  question: string
  votes: number
  options: Options
  user: string /** @todo check if this should be number when sent to react thanks */
}
export type Polls = Poll[]

export type State = Readonly<{
  snackbar: Snackbar
  authenticated: boolean
  isLoading: boolean
  polls: Polls
}>
// used in api.ts
export type Action = Readonly<{ type: 'OPEN_SNACKBAR'; message: string; variant: Variant }
  | { type: 'CLOSE_SNACKBAR' }>
