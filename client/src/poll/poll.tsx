import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis'
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
      const data = poll.options.map((option) => ({
        label: option.name,
        angle: option.votes
      }))
      return (
        <div>
          <Header currentComponent="poll" />
          {auth.user ? poll.user._id === auth.user.id && (
            <Link to="/" onClick={() => this.props.deletePoll(poll._id)}>Delete</Link>
          ) : null}
          <h3 className="poll-title">{poll.question}</h3>
          <div className="buttons_center">{answers}</div>
          <RadialChart
            labelsRadiusMultiplier={.85}
            labelsStyle={{ fontSize: 18 }}
            data={data}
            height={400}
            width={400}
            showLabels
          />
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
