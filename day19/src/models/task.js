const mongoose = require("mongoose");

const Task = mongoose.model("Tasks", {
  desc: {
    type: String,
    minlength: 3,
    trim: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
