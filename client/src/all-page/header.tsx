import * as React from 'react'
import { getStylesHeader, State } from '../exports'
import { AppBar, withStyles, WithStyles, Toolbar, createStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../utils/actions'

const styles = () => createStyles({
  root: {
    flexGrow: 1, marginBottom: 64, fontSize: 20,
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  link: {
    textAlign: 'center', color: 'white', fontSize: 20,
    textDecoration: 'none', flexGrow: 1, fontWeight: 400
  },
  badge: { top: 1, right: -15, fontSize: 16, color: '#76FF03' },
  tooltip: { fontSize: 15 }
})
// login and register should underline the same thing
type Components = 'polls' | 'create-poll' | 'poll' | '404' | 'register' | 'login' | 'home'
/**
 * @usage: Rendered at top of every point in app as a fixed navigation point.
 * @param currentComponent The current path/component rendered, underlined
 * @todo let them login OR register
 */

interface Props extends WithStyles<typeof styles> {
  currentComponent: Components
  authenticated: boolean
  logout: () => void
}
class HeaderComp extends React.Component<Props> {
  render() {
    const { classes, currentComponent, authenticated } = this.props
    return (
      <div className={classes.root}>
        <AppBar color="primary">
          <Toolbar>
            <Link
              style={{ ...getStylesHeader(currentComponent === 'home') }}
              className={classes.link} to={'/'}>Home</Link>
            <Link
              style={{ ...getStylesHeader(currentComponent === 'polls') }}
              className={classes.link} to={'/polls'}>Polls</Link>
            {!authenticated && (
              <>
                <Link
                  style={getStylesHeader(currentComponent === 'login')}
                  className={classes.link} to={'/login'}>Login</Link>
                <Link
                  style={getStylesHeader(currentComponent === 'register')}
                  className={classes.link} to={'/register'}>Register</Link>
              </>
            )}
            {authenticated && (
              <>
                <Link
                  style={getStylesHeader(currentComponent === 'create-poll')}
                  className={classes.link} to={'/create-poll'}>Create</Link>
                <Link
                  style={getStylesHeader(false)}
                  to="/" className={classes.link} onClick={this.props.logout}>Logout</Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div >
    )
  }
}
const mapStateToProps = (state: State) => ({
  authenticated: state.auth.isAuthenticated
})
export const Header = connect(mapStateToProps, { logout })(withStyles(styles)(HeaderComp))
