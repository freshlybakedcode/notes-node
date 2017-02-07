console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('Command: list');
} else if (command === 'read') {
  console.log('Command: read');
} else if (command === 'remove') {
  console.log('Command: remove');
} else if (command === undefined) {
  console.log('Command: not entered');
} else {
  console.log('Command not recognised');
}
