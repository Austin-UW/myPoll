import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { createPoll } from '../utils/actions'
import { Header } from '../exports'
import {
  Button, Theme, CssBaseline, Paper, Avatar,
  Typography, FormControl, InputLabel, Input, WithStyles, withStyles
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'

const styles = (theme: Theme) => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

const initialState = {
  question: '',
  options: ['']
}

interface Props extends WithStyles<typeof styles> {
  createPoll: (data: typeof initialState) => void
}

class CreatePollComponent extends React.Component<Props, typeof initialState>{
  constructor(props: Props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
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

  handleSubmit() {
    this.props.createPoll(this.state)
  }
  render() {
    const { classes } = this.props
    const { options } = this.state
    return (
      <div style={{ marginTop: 75 }}>
        <CssBaseline />
        <Header currentComponent="create-poll" />
        <main className={classes['layout']}>
          <Paper style={{ flexDirection: 'column' }} className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Poll Name</InputLabel>
                <Input required value={this.state.question} onChange={this.handleChange} autoFocus />
              </FormControl>
              {options.map((option: string, i: number) => (
                <FormControl key={i} margin="normal" required fullWidth>
                  <InputLabel htmlFor="option">{`Option ${i + 1}`}</InputLabel>
                  <Input value={option} required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleAnswer(e, i)}
                  />
                </FormControl>
              ))}

              <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
            </Button>
            </form>
          </Paper>
        </main>
      </div>
    )
  }
}

export const CreatePoll = connect(null, { createPoll })(withStyles(styles)(CreatePollComponent))
