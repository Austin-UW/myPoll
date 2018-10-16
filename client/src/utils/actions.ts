import { Variant, Action, Polls, Poll } from '../types'
import { CreatePollState } from '../create-poll/create-poll'
import { Dispatch } from 'redux'
import { API } from './api'
export const closeSnackbar = (): Action => ({
  type: 'CLOSE_SNACKBAR'
})

export const openSnackbar = (message: string, variant: Variant): Action => ({
  type: 'OPEN_SNACKBAR', message, variant
})

export const createPoll = (data: CreatePollState) => {
  return async (dispatch: Dispatch) => {
    try {
      const poll = await API.call('post', 'polls', data)
      dispatch(setCurrentPoll(poll))
      dispatch(removeError())
    } catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}

export const setPolls = (polls: Polls): Action => {
  return {
    type: 'SET_POLLS',
    polls
  }
}
export const setCurrentPoll = (poll: Poll): Action => {
  return {
    type: 'SET_CURRENT_POLL',
    poll
  }
}

export const addError = (error: any): Action => ({
  type: 'ADD_ERROR',
  error
})

export const removeError = (): Action => {
  return {
    type: 'REMOVE_ERROR'
  }
}
