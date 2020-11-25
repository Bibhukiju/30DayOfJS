const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    lowecase: true,
    unique: true,
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
  token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userScheme.methods.generateTokenAuth = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "hellothisisme");
  user.token = user.token.concat({ token });
  await user.save();
  return token;
};



userScheme.statics.findByCredentails = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to work");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

//hash plain text to hashed
userScheme.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userScheme);

module.exports = User;
