const express = require("express");
const haikus = require("./haikus.json");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { haikus: haikus });
});

app.listen(port);
