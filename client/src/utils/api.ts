import axios from 'axios'

const host = 'http://localhost:1234/api'

export const setToken = (token: any) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const call = async (method: 'get' | 'post' | 'delete', path: string, data?: any) => {
  // because i am lazy
  if (method === 'get') {
    const response = await axios.get(`${host}/${path}`, data)
    return response.data
  }
  else if (method === 'post') {
    const response = await axios.post(`${host}/${path}`, data)
    return response.data
  }
  else if (method === 'delete') {
    const response = await axios.delete(`${host}/${path}`, data)
    return response.data
  }
}

export const API = { setToken, call }
