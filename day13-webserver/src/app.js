const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather ",
    name: "Bibhu",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about me",
    name: "Kiju",
    imgLink: "/img/bibhu.jpg",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    message: "My message for your help",
  });
});
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
