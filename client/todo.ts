/*
  omg what if you wrote an npm package that takes an object of todos that can have subthings like so:
  and makes it super cool with checkmarks and formatting
*/
/** @todo make an interface for todos and DONT manually enter names of keys, */
const todos = {
  important: [
    { where: 'everywhere', description: 'make custom theme', completed: false },
    {
      where: 'poll component voting when already voted',
      description: 'make it so if you have already voted it just shows error',
      completed: 'pretty good'
    },
    {
      where: 'login and register',
      description: 'give message that they logged in or it failed/redirect them.'
    }
  ],
  actions: [],
  reducer: [],
  indexFiles: [],
  packageJsonOrConfig: [],
  all: [
    { description: 'make stuff that is readonly always readonly' },
    { description: 'DESTROY ALL ANYS REE', completed: '10%' },
    { description: 'make it have a margin at the top.', completed: 'meh' || true }
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
    { description: 'make buttons material and alignment to center' },
    { description: 'make poll chart responsive', completed: false },
    { description: 'make it clear it is their poll', completed: false },
    { description: 'make delete button not dissapear if not their poll but be disabled', completed: false }
  ],
  pollList: [
    { description: 'make it like stonks shop page grid thing' },
    { description: 'make it not make unnecessary server calls' },
    { description: 'make it material', completed: false },
    { description: 'make icon so you see it is yours even in show all' },
    { description: 'make it have tabs instead of buttons for all or yours', completed: false }
  ]
}
