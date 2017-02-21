console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('(No data file found - will write new file)');
    } else {
      console.log('Some kind of unknown error occurred:', e)
    }
    return notes = [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
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
