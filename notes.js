console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('(No data file found - will write new file)');
    } else {
      console.log('Some kind of unknown error occurred:', e)
    }
    var notes = [];
  }
  var note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all the notes');
};

var getNote = (title) => {
  console.log('Gonna get this note:', title);
};

var removeNote = (title) => {
  console.log('Gonna delete this note:', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
