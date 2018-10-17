import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Polls as PollsType, State } from '../types'
import { getPolls, getUserPolls } from '../utils/actions'
import { Header } from '../exports'
interface Props {
  polls: PollsType
  getPolls: () => void
  history: any
  auth: any
  getUserPolls: () => void
}
class Polls extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount() {
    this.props.getPolls()
  }

  handleSelect(id: any) { // ??? excuse me what? 吗？
    this.props.history.push(`/poll/${id}`)
  }

  render() {
    return (
      <div>
        <Header currentComponent="polls" />
        {this.props.auth.isAuthenticated && (
          <div className="buttons_center">
            <button className="button" onClick={this.props.getPolls}>
              All polls
            </button>
            <button className="button" onClick={this.props.getUserPolls}>
              My polls
            </button>
          </div>
        )}
        <ul className="polls">{this.props.polls.map((poll) => (
          <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
            {poll.question}
          </li>
        ))}
        </ul>
      </div >
    )
  }
}

export const PollsContainer = connect(
  (state: State) => ({
    auth: state.auth,
    polls: state.polls,
  }),
  { getPolls, getUserPolls },
)(Polls)
