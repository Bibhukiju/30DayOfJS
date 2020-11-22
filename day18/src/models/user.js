const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    lowecase: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error("this is not valid email");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 7,
    validate(passkey) {
      if (passkey.includes("pasword")) {
        throw new Error("Invalid password");
      }
    },
  },
  age: {
    type: Number,
    default: 18,
    validate(age) {
      if (age < 0) {
        throw new Error("invalid age");
      }
    },
  },
});

module.exports = User;  
