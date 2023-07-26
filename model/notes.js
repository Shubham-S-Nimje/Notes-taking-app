const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");

const pathToFile = path.join(
  path.dirname(require.main.filename),
  "data",
  "notes.json"
);

const getDataFromFile = (callbackFn) => {
  fs.readFile(pathToFile, (err, fileContent) => {
    if (err) {
      return callbackFn([]);
    }
    callbackFn(JSON.parse(fileContent));
  });
};

module.exports = class Notes {
  constructor(noteId, title, description, imageUrl) {
    this.noteId = noteId;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    getDataFromFile((notes) => {
      this.noteId = Math.floor(Math.random() * 1000).toString();
      notes.push(this);
      fs.writeFile(pathToFile, JSON.stringify(notes), (err) => {
        if (err) {
          console.log("err", err);
        }
      });
    });
  }

  saveChanges() {
    getDataFromFile((notes) => {
      const noteIndex = notes.findIndex((n) => n.noteId === this.noteId);
      const notesCopy = [...notes];
      notesCopy[noteIndex] = this;
      fs.writeFile(pathToFile, JSON.stringify(notesCopy), (err) => {
        if (err) {
          console.log("error in saving file", err);
        }
      });
    });
  }

  static fetchAll(callbackFn) {
    getDataFromFile(callbackFn);
  }

  static findNotebyId = (noteId, callbackFn) => {
    getDataFromFile((notes) => {
      const note = notes.find((note) => note.noteId === noteId);
      callbackFn(note);
    });
  };

  static delete(noteId) {
    getDataFromFile((notes) => {
      const note = notes.filter((n) => n.noteId !== noteId);
      fs.writeFile(pathToFile, JSON.stringify(note), (err) => {
        if (err) {
          console.log("error in saving file", err);
        }
      });
    });
  }
};
