// nodemon -e js,pug,css app.js
// npm run watch:sass
const express = require("express");
const path = require("path");
const pug = require("pug");
const reload = require("reload");

// port number
const PORT = 3000;
// init app
const app = express();

// load pug-view-engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// static files serving directory
app.use(express.static("public"));

// root route
app.get("/", (req, res) => {
  res.render("index");
});

reload(app);
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
