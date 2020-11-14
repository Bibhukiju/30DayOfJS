const { request } = require("express");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.get("", (req, res) => {
  res.send("<h1>health</h1>");
});
console.log(path.join(__dirname, "../public"));
app.get("/weather", (req, res) => {
  res.send([
    {
      name: "Bibhu",
      age: 25,
      address: "Bhaktapur",
    },
    {
      name: "Ram",
      age: 26,
      address: "Bhaktapur",
    },
    {
      name: "Nabin",
      age: 26,
      address: "Dang",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up");
});
