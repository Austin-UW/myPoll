import React from 'react'
import { connect } from 'react-redux'
import { RadialChart, DiscreteColorLegend } from 'react-vis'
import { vote as voteDispatch, deletePoll } from '../utils/actions'
import { Poll, State, Option } from '../types'
import { Header, NoMatch } from '../exports'
import { Link } from 'react-router-dom'
type PollProps = {
  deletePoll: (id: string) => void
  poll: Poll, vote: (id: any, data: { answer: string }) => void
  auth: { isAuthenticated: boolean, user: { id: string, username: string, iat: number } | null }
}

class PollComponent extends React.Component<PollProps> {
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
      const data = poll.options.map((option: Option) => {
        if (option.votes > 0) {
          return {
            label: option.name,
            angle: option.votes
          }
        }
        return { angle: 0 }
      })
      return (
        <div>
          <Header currentComponent="poll" />
          {auth.user ? poll.user._id === auth.user.id && (
            <Link to="/" onClick={() => this.props.deletePoll(poll._id)}>Delete</Link>
          ) : null}
          <h3 className="poll-title">{poll.question}</h3>
          <div className="buttons_center">{answers}</div>
          <div style={{ marginLeft: 20 }}>
            <RadialChart
              labelsRadiusMultiplier={.85}
              labelsStyle={{ fontSize: 18 }}
              data={data}
              height={400}
              width={400}
              showLabels
            />
          </div>
          <DiscreteColorLegend
            orientation="horizontal"
            style={{ fontSize: 17, marginLeft: 100 }}
            items={poll.options.map((option) => option.name)}
          />
        </div >
      )
    }
    else {
      return (
        <>
          <Header currentComponent="poll" />
          <NoMatch />
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
