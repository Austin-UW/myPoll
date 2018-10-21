/*
  omg what if you wrote an npm package that takes an object of todos that can have subthings like so:
  and makes it super cool with checkmarks and formatting
*/
/** @todo make an interface for todos and DONT manually enter names of keys, */
const todos = {
  important: [],
  actions: [],
  reducer: [],
  indexFiles: [],
  packageJsonOrConfig: [],
  all: [
    { description: 'LOADING ICONS!', completed: '20%' }
  ],
  header: [
    { description: 'make it have an avator with letter or just username', completed: false }
  ],
  noMatch: [],
  snackbarRoot: [],
  auth: [],
  createPoll: [
    { description: 'make you unable to create poll without a name and with empty options' },
    { description: 'make it material', completed: false }
  ],
  hocs: {
    snackbarHOC: [],
    loadingHOC: [
      { description: 'create it', completed: false },
      { description: 'make a megahoc?', completed: false || 'i dunno man' }
    ]
  },
  home: [
    { description: 'make it material', completed: false },
    { description: 'give description of the app', completed: false }
  ],
  poll: [
    { description: 'if they voted, display what they picked and clearly show they voted', completed: false }
    { description: 'make successfull voting show snackbar', completed: false },
    { description: 'make buttons material and alignment to center' },
    { description: 'make it clear it is their poll', completed: false },
    { description: 'make delete button not dissapear if not their poll but be disabled', completed: false }
  ],
  pollList: [
    { description: 'make it not make unnecessary server calls' },
    { description: 'make icon so you see it is yours even in show all' },
  ]
}
