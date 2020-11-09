const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/booksDB",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("conection succeed");
    } else {
      console.log(err);
    }
  }
);
