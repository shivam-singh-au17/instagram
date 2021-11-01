const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/blogsdata"));
const dbo = require("./db/conn");

app.get("/", async (req, res) => {
  try {
    return res.redirect("/blogsdata/");
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
