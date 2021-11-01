require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 3030

const connect = require("./src/config/db");

const postcontroller = require("./src/controllers/posts.controlers");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/post", postcontroller);

app.listen(port, async () => {
  // RUN THE CONNECT FUNCTION
  await connect();
  console.log("Listening on post " + port);
})

module.exports = app;
