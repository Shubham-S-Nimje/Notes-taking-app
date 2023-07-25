const Express = require("express");

const app = Express();

app.use("/", (req, res, next) => {
  res.send("<h1>Hello world!..</h1>");
});
app.listen(3000);
