const Notes = require("../model/notes");

exports.getManageNotes = (req, res, next) => {
  Notes.fetchAll((notes) => {
    res.render("admin/index", {
      pageTitle: "Manage Notes",
      path: "/manage-notes",
      notes: notes,
    });
  });
};
