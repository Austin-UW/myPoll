import * as React from 'react'
import { Polls, State, Poll } from '../types'
import { connect } from 'react-redux'

interface PollsProps {
  polls: Polls
}

class PollsComponent extends React.Component<PollsProps> {
  public render() {
    const { polls } = this.props
    return (
      <div>
        {polls.map((poll: Poll) => {
          return (
            { poll }
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state: State) => ({
  polls: state.polls
})

export const PollsContainer = connect(mapStateToProps)(PollsComponent)
