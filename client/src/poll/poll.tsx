import React from 'react'
import { connect } from 'react-redux'
import { vote as voteDispatch, deletePoll } from '../utils/actions'
import { Poll, State, Option } from '../types'
import { Header, NoMatch } from '../exports'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'

const colors = [
  '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
  '#2196F3', '#B388FF', '#00BCD4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722', '#607D8B'
]

type PollProps = {
  isLoading: boolean
  deletePoll: (id: string) => void
  poll: Poll, vote: (id: any, data: { answer: string }) => void
  auth: { isAuthenticated: boolean, user: { id: string, username: string, iat: number } | null }
}

class PollComponent extends React.Component<PollProps> {
  render() {
    const { poll, vote, auth } = this.props
    if (poll) {
      const answers = poll.options && poll.options.map((option) => (
        <button
          onClick={() => vote(poll._id, { answer: option.name })}
          key={option._id}>
          {option.name}
        </button>
      ))
      const data = {
        labels: [...poll.options.map((option: Option) => option.name)],
        datasets: [{
          data: [...poll.options.map((option: Option) => option.votes)],
          backgroundColor: [...colors]
        }]
      }
      return (
        <div>
          <Header currentComponent="poll" />
          {auth.user ? poll.user._id === auth.user.id && (
            <Link to="/" onClick={() => this.props.deletePoll(poll._id)}>Delete</Link>
          ) : null}
          <h3 className="poll-title">{poll.question}</h3>
          <div>{answers}</div>
          <div style={{ marginLeft: 20 }}>
            <Pie
              width={500}
              data={data}
            />
          </div>
        </div>
      )
    }
    else if (!this.props.isLoading) {
      return (
        <NoMatch />
      )
    }
    else {
      return null
    }
  }
}
const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  poll: state.currentPoll,
  auth: state.auth
})
const mapDispatchToProps = {
  vote: voteDispatch,
  deletePoll: deletePoll
}
export const PollContainer = connect(mapStateToProps, mapDispatchToProps)(PollComponent)
