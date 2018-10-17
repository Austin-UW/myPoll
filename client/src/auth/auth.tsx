import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authUser, logout } from '../utils/actions'
import { Header } from '../exports'

interface Props {
  authType: 'register' | 'login'
  authUser: any // change
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

  handleChange(e: any) {
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

  handleSubmit(e: any) {
    const { username, password } = this.state
    const { authType } = this.props
    e.preventDefault()
    this.props.authUser(authType || 'login', { username, password })
  }

  render() {
    const { username, password } = this.state
    const { authType } = this.props
    return (
      <div>
        <Header currentComponent={authType} />
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-label" htmlFor="username">
            username{' '}
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
            password{' '}
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

export const AuthRender = connect(() => ({}), { authUser, logout })(Auth)
