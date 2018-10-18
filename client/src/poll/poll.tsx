import React from 'react'
import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2'

import { vote as voteDispatch, deletePoll } from '../utils/actions'
import { Poll, State } from '../types'
import { Header } from '../exports'
import { Link } from 'react-router-dom'
type Props = {
  deletePoll: (id: string) => void
  poll: Poll, vote: (id: any, data: { answer: string }) => void
  auth: { isAuthenticated: boolean, user: { id: string, username: string, iat: number } | null }
}

class PollComponent extends React.Component<Props> {
  render() {
    const { poll, vote, auth } = this.props
    if (poll) {
      const answers =
        poll.options &&
        poll.options.map((option) => (
          <button
            onClick={() => vote(poll._id, { answer: option.name })}
            className="button"
            key={option._id}>
            {option.name}
          </button>
        ))

      const data = {
        labels: poll.options.map((option) => option.name),
        datasets: [
          {
            label: poll.question,
            backgroundColor: poll.options.map((option) => '#' + Math.random().toString(16).slice(2, 8)),
            borderColor: '#323643',
            data: poll.options.map((option) => option.votes),
          },
        ],
      }
      return (
        <div>
          <Header currentComponent="poll" />
          {auth.user ? poll.user._id === auth.user.id && (
            <Link to="/" onClick={() => this.props.deletePoll(poll._id)}>Delete</Link>
          ) : null}
          <h3 className="poll-title">{poll.question}</h3>
          <div className="buttons_center">{answers}</div>
          <Pie data={data} />
        </div >
      )
    }
    else {
      return (
        <>
          <Header currentComponent="poll" />
          <h1>Hiya</h1>
        </>
      )
    }
  }
}
const mapStateToProps = (state: State) => ({
  poll: state.currentPoll,
  auth: state.auth
})
const mapDispatchToProps = {
  vote: voteDispatch,
  deletePoll: deletePoll
}
export const PollContainer = connect(mapStateToProps, mapDispatchToProps)(PollComponent)
