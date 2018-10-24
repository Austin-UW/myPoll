import React from 'react'
import { connect } from 'react-redux'
import { vote, deletePoll, getCurrentPoll } from '../utils/actions'
import { Poll, State, Option, User } from '../types'
import { Header, NoMatch, withSnack } from '../exports'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'
import { Grid, CircularProgress, Button, Typography } from '@material-ui/core'

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
      const answers = (
        <Grid container justify="center" alignItems="center" style={{ marginTop: '10px' }}>
          {poll.options && poll.options.map((option) => (
            <Button
              onClick={() => this.props.vote(poll._id, { answer: option.name })}
              key={option._id} variant="outlined" style={{ borderRadius: '0px' }}
            >
              {option.name}
            </Button>
          ))}
        </Grid>
      )
      const data = {
        labels: [...poll.options.map((option: Option) => option.name)],
        datasets: [{
          data: [...poll.options.map((option: Option) => option.votes)],
          backgroundColor: [...colors]
        }]
      }
      const MyLink = (props: any) => (<Link to="/" {...props} />)
      // const hasVoted: { voted: boolean, vote: Option | null } = { voted: false, vote: null }
      let hasVoted = false
      poll.voted.map((id: string) => {
        if (auth.user !== null) {
          if (id === auth.user.id) { hasVoted = true }
        }
      })
      let isUsersPoll = false
      if (auth.user && poll.user._id === auth.user.id) {
        isUsersPoll = true
      }
      return (
        <div style={{ marginTop: 75, marginLeft: 20 }}>
          {/* like jazz */}
          <Header currentComponent="poll" />
          <Grid container style={{ marginBottom: 5 }} justify="center">
            {hasVoted ? (
              <Typography component="h1" style={{ fontSize: 15 }}>You have voted already!</Typography>
            ) : <Typography component="h1" style={{ fontSize: 15 }}>Not yet voted!</Typography>
            }
          </Grid>
          <Grid container justify="center">
            <Button
              variant="raised" component={MyLink} onClick={() => this.props.deletePoll(poll._id)}
              color="secondary" disabled={!isUsersPoll}
            >
              Delete Your Poll
            </Button>
          </Grid>
          <Grid container justify="center">
            <Typography component="h1" style={{ fontSize: 20 }}>
              {poll.question}
            </Typography>
          </Grid>
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
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <CircularProgress style={{ marginTop: 90 }} size={50} />
        </Grid>
      )
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
