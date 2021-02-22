const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Boom Boom Shake Shake");
});

module.exports = app;
