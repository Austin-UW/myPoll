import React from 'react'
import { connect } from 'react-redux'
import { vote, deletePoll, getCurrentPoll } from '../utils/actions'
import { Poll, State, Option, User } from '../types'
import { Header, NoMatch, withSnack } from '../exports'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'

const colors = [
  '#B388FF', '#9C27B0', '#3F51B5',
  '#2196F3', '#00BCD4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFC107', '#FF9800',
  '#FF5722', '#607D8B', '#673AB7', '#F44336'
]

type PollProps = {
  id: string
  getCurrentPoll: (id: string) => void
  isLoading: boolean
  deletePoll: (id: string) => void
  poll: Poll,
  vote: (id: string, data: { answer: string }) => void
  auth: {
    isAuthenticated: boolean, user: User
  }
}
class PollComponent extends React.Component<PollProps> {
  componentWillMount() {
    this.props.getCurrentPoll(this.props.id)
  }
  render() {
    const { poll, auth, isLoading } = this.props
    if (poll && !isLoading) {
      const answers = poll.options && poll.options.map((option) => (
        <button
          onClick={() => this.props.vote(poll._id, { answer: option.name })}
          key={option._id}
        >
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
        <div style={{ marginTop: 75, marginLeft: 20 }}>
          {/* like jazz */}
          <Header currentComponent="poll" />
          {/*check if user._id exists*/}
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
  vote,
  deletePoll,
  getCurrentPoll
}
export const PollRender = withSnack('poll', connect(mapStateToProps, mapDispatchToProps)(PollComponent))
