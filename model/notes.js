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
  constructor(title, description, imageUrl) {
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

  static fetchAll(callbackFn) {
    getDataFromFile(callbackFn);
  }
};
