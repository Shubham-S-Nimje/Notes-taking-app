const express = require("express");

const router = express.Router();

const notesController = require("../controllers/notes");

router.get("/", notesController.getIndex);

router.get('/add-note', notesController.getAddnote);

router.post('/add-note', notesController.postNote);

module.exports = router;
