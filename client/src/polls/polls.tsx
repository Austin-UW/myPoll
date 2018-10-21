import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Polls as PollsType, State } from '../types'
import { getPolls, getUserPolls } from '../utils/actions'
import { Header, withSnack } from '../exports'
import { Tabs, Tab, Paper, List, ListItem, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
interface Props {
  polls: PollsType
  getPolls: () => void
  isAuthenticated: boolean
  getUserPolls: () => void
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
        <List>{this.props.polls.map((poll) => (
          <div key={poll._id}>
            <Link
              style={{ textDecoration: 'none', width: '100%', height: '100%', color: 'black' }}
              to={`/poll/${poll._id}`}
            >
              <ListItem button>
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
  isAuthenticated: state.auth.isAuthenticated,
  polls: state.polls,
})
const mapDispatchToProps = {
  getPolls,
  getUserPolls
}
export const PollsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withSnack('polls', Polls))
