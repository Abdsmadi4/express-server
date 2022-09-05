"use strict";
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());




app.get('/', (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/person", (req, res) => {
  const age = req.query.age;
  const newAge = parseInt(age) + 5;
  res.status(200).send(`new age = ${newAge}`);
});


function start(port) {
  app.listen(port, () => console.log(`Listening on port ${port}`));

}

module.exports = {
  app: app,
  start: start,
};