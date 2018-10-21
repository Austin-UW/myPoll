import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { createPoll } from '../utils/actions'
import { Header } from '../exports'
import { Button, TextField } from '@material-ui/core'
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
      question: '',
      options: [''],
    }

    this.handleChange = this.handleChange.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ question: e.target.value })
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ''] })
  }

  handleAnswer(e: ChangeEvent<HTMLInputElement>, index: number) {
    const options = [...this.state.options]
    options[index] = e.target.value
    this.setState({ options })
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.createPoll(this.state)
  }

  render() {
    return (
      <div style={{ marginTop: 75 }}>
        <Header currentComponent="create-poll" />
        <form className="form" onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.question}
            onChange={this.handleChange}
            required
            label="Name"
          />
          {this.state.options.map((option: string, i) => (
            <TextField
              value={option}
              key={i}
              label="Option"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleAnswer(e, i)}
            />
          ))}
          <Button onClick={this.addAnswer}>
            Add options
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export const CreatePoll = connect(null, { createPoll })(CreatePollComponent)
