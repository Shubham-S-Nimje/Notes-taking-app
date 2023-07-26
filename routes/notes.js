const express = require("express");

const router = express.Router();

const notesController = require("../controllers/notes");

router.get("/", notesController.getIndex);

router.get('/add-note', notesController.getAddnote);

router.post('/add-note', notesController.postNote);

router.get('/note/:noteId', notesController.getNoteDetails);//dynamic params


module.exports = router;
