import React from 'react'

import { PollContainer } from './poll'
import { getCurrentPoll } from '../utils/actions'
import { connect } from 'react-redux'

const PollPage = ({ id, getPoll }: { id: any, getPoll: (id: any) => void }) => {
  getPoll(id)
  return (
    <div>
      <PollContainer />
    </div>
  )
}

export const PollRender = connect(null, { getPoll: getCurrentPoll })(PollPage)
