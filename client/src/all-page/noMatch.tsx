import React from 'react'
import { connect } from 'react-redux'
import { Header, withSnack, State } from '../exports'
import './styles.css'
import { Link } from 'react-router-dom'
class NoMatchComponent extends React.Component<{ message: string | null }> {
  render() {
    if (this.props.message === null) {
      return (
        <div style={{ backgroundColor: 'black' }}>
          <Header currentComponent={'404'} />
          <div id="notfound">
            <div className="notfound">
              <div className="notfound-404">
                <h1>4<span>0</span>4</h1>
              </div>
              <p>The page you are looking for might have been removed had its name changed
                or is temporarily unavailable.</p>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>Thats an error, oog: {this.props.message}, quite a dissapointment, immeasurable. :(</div>
    )
  }
}

export const NoMatch = connect((state: State) => ({
  message: state.error.message
}))(withSnack('404 :(', NoMatchComponent, 'error', ''))
