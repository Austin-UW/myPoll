import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'

import { authUser, logout } from '../utils/actions'
import { Header } from '../exports'

interface Props {
  authType: 'register' | 'login'
  authUser: (authType: 'login' | 'register', data: { username: string, password: string }) => void // change
}
interface State {
  username: string
  password: string
}
class Auth extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value })

    }
    else if (e.target.name === 'password') {
      this.setState({ password: e.target.value })
    }
    else {
      console.log('auth/auth.tsx handleChange else statement reached so bad')
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { username, password } = this.state
    const { authType } = this.props
    e.preventDefault()
    console.log(authType)
    this.props.authUser(authType, { username, password })
  }

  render() {
    const { username, password } = this.state
    const { authType } = this.props
    return (
      <div style={{ marginTop: 75 }}>
        <Header currentComponent={authType} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            username
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          <div className="buttons_center">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div >
    )
  }
}

export const AuthRender = connect(null, { authUser, logout })(Auth)
