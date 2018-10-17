import * as React from 'react'
import { getStylesHeader } from '../exports'
import { AppBar, withStyles, WithStyles, Toolbar, createStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = () => createStyles({
  root: {
    flexGrow: 1, marginBottom: 75, fontSize: 20,
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
interface Props extends WithStyles<typeof styles> {
  currentComponent: Components
}
/**
 * @usage: Rendered at top of every point in app as a fixed navigation point.
 * @param currentComponent The current path/component rendered, underlined
 * @todo let them login OR register
 */
class HeaderComp extends React.Component<Props> {
  render() {
    const { classes, currentComponent } = this.props
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
            <Link
              style={getStylesHeader(currentComponent === 'create-poll')}
              className={classes.link} to={'/create-poll'}>Create</Link>
            <Link
              style={getStylesHeader(currentComponent === 'login')}
              className={classes.link} to={'/login'}>Login</Link>
            <Link
              style={getStylesHeader(currentComponent === 'register')}
              className={classes.link} to={'/register'}>Register</Link>
            {/* need to use classes to override Tooltip, DO NOT USE CLASSNAME */}
          </Toolbar>
        </AppBar>
      </div >
    )
  }
}

export const Header = connect(null)(withStyles(styles)(HeaderComp))
