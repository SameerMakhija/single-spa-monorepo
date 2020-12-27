const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = require("./app");
require("./assembler");

app.use(express.static("static"));
app.use(morgan("tiny"));
app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), "./server/views"));

if (!process.env.PORT) {
  console.log(`App is hosted at http://localhost:9000/`);
}

const port = process.env.PORT || 9000;
app.listen(port);
