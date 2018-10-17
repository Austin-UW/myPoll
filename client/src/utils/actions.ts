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

export const vote = (path: any, data: { answer: string }) => { // path is the poll id
  return async (dispatch: Dispatch) => {
    try {
      const poll = await API.call('post', `polls/do/${path}`, data)
      dispatch(setCurrentPoll(poll))
    } catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}

export const getCurrentPoll = (path: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const poll = await API.call('get', `polls/do/${path}`)
      dispatch(setCurrentPoll(poll))
      dispatch(removeError())
    } catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}
export const setCurrentUser = (user: any): Action => ({
  type: 'SET_CURRENT_USER',
  user,
})

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.clear()
    API.setToken(null)
    dispatch(setCurrentUser({}))
    dispatch(removeError())
  }
}

export const authUser = (authType: 'login' | 'register', data: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const { token, ...user } = await API.call('post', `auth/${authType}`, data)
      localStorage.setItem('jwtToken', token)
      API.setToken(token)
      dispatch(setCurrentUser(user))
      dispatch(removeError())
    } catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}
export const getPolls = () => {
  return async (dispatch: Dispatch) => {
    try {
      const polls = await API.call('get', `polls/polls`)
      dispatch(setPolls(polls))
      dispatch(removeError())
    } catch (err) {
      const { error } = err.response.data
      console.log(error)
      dispatch(addError(error))
    }
  }
}

export const getUserPolls = () => {
  return async (dispatch: Dispatch) => {
    try {
      const polls = await API.call('get', 'polls/user')
      console.log(polls)
      dispatch(setPolls(polls))
      dispatch(removeError())
    }
    catch (err) {
      console.log(err.responce.data)
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}
