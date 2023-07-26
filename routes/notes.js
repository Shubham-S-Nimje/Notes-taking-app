const express = require("express");

const router = express.Router();

const notesController = require("../controllers/notes");

router.get("/", notesController.getIndex);

router.get('/add-note', notesController.getAddnote);

router.post('/add-note', notesController.postNote);

//dynamic params
router.get('/note/:noteId', notesController.getNoteDetails);

router.get('/add-note/:noteId', notesController.getEditNoteDetails);

router.post('/edit-note', notesController.saveEditNote);




module.exports = router;
