const Express = require("express");

const app = Express();

const notesRouter = require('./routes/notes')
const adminRouter = require('./routes/admin')

app.use(notesRouter);
app.use('/admin',adminRouter);

app.set('view engine', 'ejs');

app.use("/", (req, res, next) => {
  res.send("<h1>Hello world!..</h1>");
});
app.listen(3000);
