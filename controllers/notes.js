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
    isEditMode: '',
  });
};

exports.postNote = (req, res, next) => {
  const reqBody = req.body;
  const { title, description, imageUrl } = reqBody;
  const note = new Notes(null, title, description, imageUrl);
  note.save();
  res.redirect("/");
};

exports.getNoteDetails = (req, res, next) => {
  const noteId = req.params.noteId;
  Notes.findNotebyId(noteId, (note) => {
    res.render("notes/note", {
      pageTitle: "View Note Details",
      path: "",
      note: note,
    });
  });
};

exports.getEditNoteDetails = (req, res, next) => {
  const noteId = req.params.noteId;
  const isEdit = req.query.isEditing;
  Notes.findNotebyId(noteId, (note) => {
    res.render("notes/add-note", {
      pageTitle: "Editing a note",
      path: "",
      note: note,
      isEditMode: isEdit,
    });
  });
};

exports.saveEditNote = (req, res, next) => {
  const reqBody = req.body;
  const { title, description, imageUrl, noteId } = reqBody;

  const note = new Notes(noteId, title, description, imageUrl);
  note.saveChanges();
  res.redirect(`/note/${noteId}`);
};

exports.deleteNote = (req, res, next) => {
  const noteId = req.body.noteId;
  Notes.delete(noteId);
  res.redirect('/');
};
