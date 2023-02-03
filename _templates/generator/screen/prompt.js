// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'repo',
    message: 'In which repo do you want to put this screen in ?',
    choices: ['connected', 'authentication'],
  },
  {
    type: 'input',
    name: 'name',
    message: "What's the name of the screen ?",
  },
  {
    type: 'select',
    name: 'hasTypes',
    message: 'Do you want a types file ?',
    choices: ['yes', 'no'],
  },
];
