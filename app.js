const express = require("express");
const Settings = require("./lib/controllers/Settings");
const Locale = require("./lib/controllers/Locale").init();
const port = 80;

const app = express();

app.get('/', (req, res) => {
  const Text = require("./lib/ge/Text.js");
  res.send(new Text({en: `Hello World!`}).value());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});