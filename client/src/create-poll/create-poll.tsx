import React, { Component } from 'react'
import { connect } from 'react-redux'
const uuidv1 = require('uuid/v1')
import { createPoll } from '../utils/actions'
import { Header } from '../exports'
interface Props {
  createPoll: (data: CreatePollState) => void
}
export interface CreatePollState {
  question: string,
  options: string[]
}

class CreatePollComponent extends Component<Props, CreatePollState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      question: 'put question here',
      options: ['option'],
    }

    this.handleChange = this.handleChange.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: any) {
    this.setState({ question: e.target.value })
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ''] })
  }

  handleAnswer(e: any, index: number) {
    const options = [...this.state.options]
    options[index] = e.target.value
    this.setState({ options })
  }

  handleSubmit(e: any) {
    e.preventDefault()
    this.props.createPoll(this.state)
  }

  render() {
    return (
      <>
        <Header currentComponent="create-poll" />
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-label" htmlFor="question">
            question
        </label>
          <input
            className="form-input"
            type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
          />
          <div className="container">
            {this.state.options.map((option: string, i) => (
              <div key={uuidv1()}>
                <label className="form-label">option</label>
                <input
                  className="form-input"
                  type="text"
                  value={option}
                  key={i}
                  onChange={(e) => this.handleAnswer(e, i)}
                />
              </div>
            ))}
          </div>
          <div className="buttons_center">
            <button className="button" type="button" onClick={this.addAnswer}>
              Add options
          </button>
            <button className="button" type="submit">
              Submit
          </button>
          </div>
        </form>
      </>
    )
  }
}

export const CreatePoll = connect(null, { createPoll })(CreatePollComponent)
