import { Variant, Action, Polls, Poll, User } from '../types'
import { CreatePollState } from '../create-poll/create-poll'
import { Dispatch } from 'redux'
import { API } from './api'
export const startLoading = (): Action => ({
  type: 'START_LOADING'
})
export const stopLoading = (): Action => ({
  type: 'STOP_LOADING'
})
export const closeSnackbar = (): Action => ({
  type: 'CLOSE_SNACKBAR'
})

export const openSnackbar = (message: string, variant: Variant): Action => ({
  type: 'OPEN_SNACKBAR', message, variant
})

export const createPoll = (data: CreatePollState) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const poll = await API.call('post', 'polls/polls', data)
      dispatch(setCurrentPoll(poll))
      dispatch(openSnackbar('poll created successfully', 'success'))
      dispatch(removeError())
      dispatch(stopLoading())
    }
    catch (err) {
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

export const addError = (error: string): Action => ({
  type: 'ADD_ERROR',
  error
})

export const removeError = (): Action => {
  return {
    type: 'REMOVE_ERROR'
  }
}

export const vote = (path: string, data: { answer: string }) => { // path is the poll id
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const poll = await API.call('post', `polls/do/${path}`, data)
      dispatch(setCurrentPoll(poll))
      dispatch(stopLoading())
    }
    catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}

export const getCurrentPoll = (path: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const poll = await API.call('get', `polls/do/${path}`)
      dispatch(setCurrentPoll(poll))
      dispatch(removeError())
      dispatch(stopLoading())
    }
    catch (err) {
      if ('responce' in err) {
        console.log('gert poll catch TRIGGERED')
        dispatch(addError('oh no, thats A BIG ERROR' + err.responce.data))
        dispatch(stopLoading())
      }
      else {
        dispatch(addError('no error responce in getCurrentPoll catch'))
        dispatch(stopLoading())
      }
    }
  }
}
export const setCurrentUser = (user: User): Action => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    localStorage.clear()
    API.setToken(null)
    dispatch(startLoading())
    dispatch(setCurrentUser({}))
    dispatch(removeError())
    dispatch(stopLoading())
  }
}

export const authUser = (authType: 'login' | 'register', data: { username: string, password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const { token, ...user } = await API.call('post', `auth/${authType}`, data)
      localStorage.setItem('jwtToken', token)
      API.setToken(token)
      dispatch(setCurrentUser(user))
      dispatch(removeError())
      dispatch(stopLoading())
    }
    catch (err) {
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}
export const getPolls = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const polls = await API.call('get', `polls/polls`)
      dispatch(setPolls(polls))
      dispatch(removeError())
      dispatch(stopLoading())
    }
    catch (err) {
      const { error } = err.response.data
      console.log(error)
      dispatch(addError(error))
    }
  }
}

export const getUserPolls = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading())
      const polls = await API.call('get', 'polls/user')
      console.log(polls)
      dispatch(setPolls(polls))
      dispatch(removeError())
      dispatch(stopLoading())
    }
    catch (err) {
      console.log(err.responce.data)
      const { error } = err.response.data
      dispatch(addError(error))
    }
  }
}

export const deletePoll = (id: string) => {
  // console.log('deleto')
  return async (dispatch: Dispatch) => {
    try {
      console.log('delete poll action')
      console.log('polls/do/' + id)
      const polls = await API.call('delete', 'polls/do/' + id)
      console.log(polls)
      dispatch(setPolls(polls))
      dispatch(removeError())
    }
    catch (err) {
      console.log(err.responce.data)
      const { error } = err.responce.data
      dispatch(addError(error))
    }
  }
}
