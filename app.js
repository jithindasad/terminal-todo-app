const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var notes = require('./notes.js');
var argv = yargs.argv;

var command = argv._[0];


if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }

}else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(` printing ${allNotes.length} note(s). `);
  allNotes.forEach((note) => notes.logNote(note));

}else if (command === "read") {
  var note = notes.getNote(argv.title);
  console.log(note);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('note not found');
  }

}else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed' : "Note not found";
  console.log(message);
}else {
  console.log("command not recogonized");
}
