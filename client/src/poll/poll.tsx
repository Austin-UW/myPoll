import React from 'react'
import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2'

import { vote as voteDispatch } from '../utils/actions'
import { Poll, State } from '../types'
import { Header } from '../exports'
type Props = {
  poll: Poll, vote: (id: any, data: { answer: string }) => void
}

class PollComponent extends React.Component<Props> {
  render() {
    const { poll, vote } = this.props
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
  poll: state.currentPoll
})
const mapDispatchToProps = {
  vote: voteDispatch
}
export const PollContainer = connect(mapStateToProps, mapDispatchToProps)(PollComponent)
