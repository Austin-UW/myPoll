import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../types'
type Props = {
  id: string // will be changed into string by router props dab im so sorry
}
class PollComponent extends Component<Props> {
  render() {
    return (
      <div>hi</div>
    )
  }
}

const mapStateToProps = (state: State) => {

}
/** @todo DON'T rename to Poll because types.ts has a poll type so can you LIKE NOT */
export const PollContainer = connect(mapStateToProps)(PollComponent)
