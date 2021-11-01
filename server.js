require("dotenv").config();
const express = require("express");
const app = express();


const postcontroller = require("./src/controllers/posts.controlers");

const connect = require("./src/config/db");

const port = process.env.PORT || 3030

app.use("/post", postcontroller);

app.listen(port, async () => {
  // RUN THE CONNECT FUNCTION
  await connect();
  console.log("Listening on post " + port);
})

module.exports = app;
