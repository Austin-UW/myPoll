/*
  omg what if you wrote an npm package that takes an object of todos that can have subthings like so:
  and makes it super cool with checkmarks and formatting
*/
const todos = {
  allPage: {
    header: [],
    noMatch: [],
    snackbarRoot: []
  },
  auth: {
    auth: []
  },
  createPoll: [],
  snackbarHOC: [],
  home: [],
  poll: {
    poll: [
      { description: 'make poll chart responsive', completed: false },
      { description: 'make it clear it is their poll', completed: false },
      { description: 'make delete button not dissapear if not their poll but be disabled', completed: false },
      { description: ' make labels not suck ', completed: 'meh' || true }
    ],
    render: [
      { description: 'delete it and move to poll componentWillMount or didMount', completed: false }
    ]
  },
  polls: []
}
