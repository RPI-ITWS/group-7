const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.static("my-app/build"));

app.listen(port, () => {
  console.log("Listening on port 3000");
});
