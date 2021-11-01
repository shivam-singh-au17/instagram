require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3030

const connect = require("./src/config/db");

const postcontroller = require("./src/controllers/posts.controlers");

app.use(cors());
app.use(express.json());


app.use(postcontroller);


app.get("/", async (req, res) => {
  try {
    return res.redirect("/post/");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


app.listen(port, async () => {

  await connect();
  console.log("Listening on post " + port);
  
})



module.exports = app;


