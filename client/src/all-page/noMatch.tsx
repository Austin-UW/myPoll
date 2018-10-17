import React from 'react'
import { connect } from 'react-redux'
import { Header, withSnack, State } from '../exports'
class NoMatchComponent extends React.Component<{ message: string | null }> {
  render() {
    if (this.props.message === null) {
      return (
        <div style={{ backgroundColor: 'black' }}>
          <Header currentComponent={'404'} />
          <h1 style={{ fontSize: 50, backgroundColor: 'black', color: 'green' }}>
            404, OOPSIE
        </h1>
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
