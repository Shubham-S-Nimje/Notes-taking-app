exports.getManageNotes = (req, res, next) => {
  res.render("admin/index", {
    pageTitle: "Manage Notes",
  });
};
