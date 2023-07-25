const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("notes/index", {
    pageTitle: "Notes",
  });
});

router.get("/add-note", (req, res, next) => {
  res.render("notes/add-note", {
    pageTitle: "Add a note",
  });
});

module.exports = router;
