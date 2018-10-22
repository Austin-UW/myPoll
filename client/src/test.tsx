/* import { Component, Props, ChangeEvent, FormEvent } from 'react'

import { CreatePollState } from './create-poll/create-poll'

import { Header } from './exports'

import { TextField, Button } from '@material-ui/core'
import React from 'react'
interface Props {
  createPoll: (data: CreatePollState) => void
}
export interface CreatePollState {
  question: string,
  options: string[]
}
export class CreatePollComponent extends Component<Props, CreatePollState> {
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
              label={`Option ${i + 1}`}
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
*/
