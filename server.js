const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(require("./src/controller/user.controller"));
const dbo = require("./src/config/db");

app.get("/", async (req, res) => {
  try {
    return res.redirect("/user/");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
