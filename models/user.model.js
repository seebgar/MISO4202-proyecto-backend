const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Schema

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

// hash user password before saving into database
UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = (module.exports = mongoose.model("User", UserSchema));
