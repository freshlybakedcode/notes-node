console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created!\n-------------\nTitle: ${argv.title}\nBody: ${argv.body}`);
  } else {
    console.log(`There is already a note with the title "${argv.title}"`);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === undefined) {
  console.log('Command: not entered');
} else {
  console.log('Command not recognised');
}
