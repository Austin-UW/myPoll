import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Polls as PollsType, State, User, Poll } from '../types'
import { getPolls, getUserPolls } from '../utils/actions'
import { Header } from '../exports'
import { Tabs, Tab, Paper, List, ListItem, Divider, Grid, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import HowToReg from '@material-ui/icons/HowToRegOutlined'
interface Props {
  auth: { isAuthenticated: boolean, user: User }
  polls: PollsType
  getPolls: () => void
  isAuthenticated: boolean
  getUserPolls: () => void
  isLoading: boolean
}
interface PollState {
  value: number
}
class Polls extends Component<Props, PollState> {
  state: PollState = {
    value: 0
  }
  constructor(props: Props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getPolls()
  }
  handleChange = (event: ChangeEvent, value: number) => {
    if (value === 0) {
      this.props.getPolls()
    }
    else if (value === 1) {
      this.props.getUserPolls()
    }
    this.setState({ value })
  }
  render() {
    const { isLoading, auth } = this.props
    const { value } = this.state
    return (
      <div style={{ marginTop: 75 }}>
        <Header currentComponent="polls" />
        {this.props.isAuthenticated && (
          <div>
            <Paper style={{ maxWidth: 320, marginLeft: 30 }} square>
              <Tabs value={value} onChange={this.handleChange} centered>
                <Tab label="All Polls" />
                <Tab label="Your Polls" />
              </Tabs>
            </Paper>
          </div>
        )}
        {isLoading && (
          <Grid container direction="column" justify="center" alignItems="center">
            <CircularProgress size={50} />
          </Grid>
        )}
        <List>{this.props.polls.map((poll: Poll) => (
          <div key={poll._id}>
            <Link
              style={{ textDecoration: 'none', width: '100%', height: '100%', color: 'black' }}
              to={`/poll/${poll._id}`}
            >
              <ListItem button>
                {/* it has to be done man*/}
                {auth.user ? value === 1 || poll.user._id === auth.user.id ? (
                  <HowToReg style={{ marginRight: 5 }} />
                ) : null : null}
                {poll.question}
              </ListItem>
            </Link>
            <Divider />
          </div>
        ))}
        </List>
      </div >
    )
  }
}
const mapStateToProps = (state: State) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  polls: state.polls,
  isLoading: state.isLoading
})
const mapDispatchToProps = {
  getPolls,
  getUserPolls
}
export const PollsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Polls)
