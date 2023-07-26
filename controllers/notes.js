const { response } = require("express");
const Notes = require("../model/notes");

exports.getIndex = (req, res, next) => {
  Notes.fetchAll((notes) => {
    res.render("notes/index", {
      pageTitle: "Notes",
      path: "/",
      notes: notes,
    });
  });
};

exports.getAddnote = (req, res, next) => {
  res.render("notes/add-note", {
    pageTitle: "Add a note",
    path: "/add-notes",
  });
};

exports.postNote = (req, res, next) => {
  const reqBody = req.body;
  const { title, description, imageUrl } = reqBody;
  const note = new Notes(title, description, imageUrl);
  note.save();
  res.redirect("/");
};
