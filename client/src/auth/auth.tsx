import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { authUser, logout } from '../utils/actions'
import { Header, State } from '../exports'
import {
  Paper, Grid, TextField, Button, Theme, withStyles, WithStyles, CircularProgress
} from '@material-ui/core'
import { Fingerprint, Face } from '@material-ui/icons'

const styles = (theme: Theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
    marginTop: 69,
    width: '94%',
    marginLeft: '3%'
  }
})

interface Props extends WithStyles<typeof styles> {
  isAuthenticated: boolean
  isLoading: boolean
  authType: 'register' | 'login'
  authUser: (authType: 'login' | 'register', data: { username: string, password: string }) => void // change
}
interface PropsState {
  username: string
  password: string
}
class Auth extends Component<Props, PropsState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handlePassword = this.handlePassword.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlePassword(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: e.target.value })
  }
  handleUsername(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value })
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { username, password } = this.state
    const { authType } = this.props
    this.props.authUser(authType, { username, password })
  }

  render() {
    // const { password } = this.state
    const { authType, classes, isLoading, isAuthenticated } = this.props
    return (
      <div>
        <Header currentComponent={authType} />
        {!isAuthenticated ? <Paper className={classes.padding}>
          <form onSubmit={this.handleSubmit} className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  autoComplete="on"
                  onChange={this.handleUsername}
                  label="Username" fullWidth autoFocus required
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  id="username" label="Password" fullWidth required type="password"
                />
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
              <Button
                variant="raised"
                color="secondary"
                fullWidth
                type="submit"
                style={{
                  textTransform: 'none', marginTop: 10,
                  borderRadius: 0, paddingTop: 11, paddingBottom: 11
                }}
              >
                {authType}
              </Button>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
              {isLoading ? (
                <CircularProgress size={50} />
              ) : null}
            </Grid>
          </form>
        </Paper> : (
            <div style={{ marginTop: 75 }}>
              You are already logged in!
          </div>
          )}
      </div>
    )
  }
}
const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  isAuthenticated: state.auth.isAuthenticated
})
export const AuthRender = withStyles(styles)(connect(mapStateToProps, { authUser, logout })(Auth))
