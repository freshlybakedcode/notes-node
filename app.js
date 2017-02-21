console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  var message = note ? `Note created!\n-------------\nTitle: ${argv.title}\nBody: ${argv.body}` : `There is already a note with the title "${argv.title}"`;
  console.log(message);
}

else if (command === 'list') {
  notes.getAll();
}

else if (command === 'read') {
  var returnedNote = notes.getNote(argv.title);
  if (returnedNote.length === 1) {
    var underscores = "";
    for (i=0; i<returnedNote[0].title.length; i++) {
      underscores += "=";
    }
    var message = `\n${returnedNote[0].title}\n${underscores}\n${returnedNote[0].body}`
  } else {
    var message = `Cannot find a note with the title "${argv.title}"`;
  }
  console.log(message);
}

else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Deleting note with title "${argv.title}"` : `Note with title "${argv.title}" not found`;
  console.log(message);
}

else if (command === undefined) {
  console.log('Command: not entered');
} else {
  console.log('Command not recognised');
}
