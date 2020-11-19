const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/user", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch(() => {});
});

app.listen(port, () => {
  console.log("hello server " + port);
});
