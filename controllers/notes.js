exports.getIndex = (req, res, next) => {
    res.render("notes/index", {
      pageTitle: "Notes",
      path: '/'
    });
  }

  exports.getAddnote = (req, res, next) => {
    res.render("notes/add-note", {
      pageTitle: "Add a note",
      path: '/add-notes'
    });
  }

  exports.postNote = (req, res, next) => {
    console.log(req.body)
  }