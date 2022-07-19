const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "A user must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: [8, "Please provide a password with at least 8 characters"],
    select: false,
  },
  Lists: [String],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
