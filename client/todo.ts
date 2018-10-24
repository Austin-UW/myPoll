/*
  omg what if you wrote an npm package that takes an object of todos that can have subthings like so:
  and makes it super cool with checkmarks and formatting
*/
/** @todo make an interface for todos and DONT manually enter names of keys, */
const todos = {
  important: [],
  actions: [],
  reducer: [],
  all: [],
  header: [],
  noMatch: [],
  snackbarRoot: [],
  auth: [],
  createPoll: [
  ],
  hocs: {
    snackbarHOC: []
  },
  home: [
    { description: 'make it material', completed: false },
    { description: 'give description of the app', completed: false }
  ],
  poll: [
    { description: 'display what they voted', completed: false },
    { description: 'make delete button not dissapear if not their poll but be disabled', completed: false }
  ],
  pollList: []
}
