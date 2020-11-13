//global variables
const fs = require("fs");

//functions

const saveNotes = (notes) => {
  console.log(notes);
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
getNotes = function () {
  return "get notes";
};
const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("note title is already taken");
  }
};

const removeNotes = (title) => {
  const dataBuffer = fs.readFileSync("notes.json");
  let notes = dataBuffer.toString();
  notes = JSON.parse(notes);
  let removedNotes = notes.filter((note) => {
    return note.title != title;
  });

  fs.writeFileSync("notes.json", JSON.stringify(removedNotes));
};

module.exports = {
  getnotes: getNotes,
  addNote: addNotes,
  removeNotes: removeNotes,
};
