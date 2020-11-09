const mongoose = require("mongoose");

let booksSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  imgLink: {
    type: String,
  },
});

mongoose.model("books", booksSchema);
