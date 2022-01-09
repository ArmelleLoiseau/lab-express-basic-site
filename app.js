// set-up
const express = require("express");
const app = express();
require("./db/db-config");
const PORT = 4000;
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
const hbs = require("hbs");
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.urlencoded({ extended: false }));

// routes
// Home Page
app.get("/", (req, res) => {
  const scripts = ["/js/canvas.js"];
  res.render("home", {
    scripts,
  });
});

// about page
app.get("/about", (req, res) => {
  res.render("about");
});

// work page
app.use("/work", require("./routes/work.route"));

app.listen(PORT, console.log(`listening on port ${PORT}`));
