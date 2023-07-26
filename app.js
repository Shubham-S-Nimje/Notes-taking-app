const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const notesRouter = require("./routes/notes");
const adminRouter = require("./routes/admin");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(notesRouter);
app.use("/admin", adminRouter);

app.use("/", (req, res, next) => {
  res.render("404", {
    pageTitle: "Page not founr",
    path: "/",
  });
});
app.listen(3000);
