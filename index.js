const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello!!!!!!!! world");
});

app.listen(3000, () => {
  console.log("running on 3000");
});
