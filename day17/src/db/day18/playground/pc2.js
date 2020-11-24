const Task = require("../src/models/task");
require("../src/db/mongoose");

Task.findByIdAndDelete("5fb63599db60b12abc70c2ae")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ isComplted: false });
  })
  .then((result) => {   
    console.log(result);
  })
  .catch();
