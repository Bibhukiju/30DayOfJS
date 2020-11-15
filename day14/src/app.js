const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partitalPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partitalPath);

//set static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Bibhu ",
    subtitle: "Hello World",
    about:
      "I am a ever-learner who always believes on learning and sharing I enjoy to learn new tech stuffs and ready to dive into depth if i ever started and want to explore tech stuff more. Despite of working alone I love to work by collaborating with team",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Kiju",
    imgLink: "./img/bibhu.jpg",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "My message for your help",
    title: "Help",
  });
});

//this s how we return json
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
